describe('App integration test', () => {
	beforeEach(async () => {
		await page.goto('http://localhost:5173')
	})

	it('loads the UI', async () => {
		await expect(page.title()).resolves.toMatch('P5.CLJS Web Editor')
		await expect(page.$('#editor')).resolves.toBeTruthy()
		await expect(page.$('#navigation')).resolves.toBeTruthy()
		await expect(page.$('#run-btn')).resolves.toBeTruthy()
		await expect(page.$('#stop-btn')).resolves.toBeTruthy()
	})

	it('starts and stops a valid sketch', async () => {
		await page.click('#run-btn')
		expect(page.url()).toBe("http://localhost:5173/?sketch=00hJTctTKE4tKS1QiI7lUlDQyCrWTy5KTSxJdU7MK0ssVjAxMABhTU0uiNqUosRyhNKkxOTs9KL80rwUBSMjoCIA")
		await expect(page.$('#defaultCanvas0')).resolves.toBeTruthy()
		await expect(page.$('#user-sketch')).resolves.toBeTruthy()

		await page.click('#stop-btn')
		await expect(page.$('#defaultCanvas0')).resolves.toBeFalsy()
	})

	it('starts, modifies and restarts a valid sketch', async () => {
		await page.click('#run-btn')
		const width = await page.$eval('#defaultCanvas0', e => e.getAttribute("width"))

		await page.click('.cm-editor')
		await page.keyboard.down('Control')
		await page.keyboard.press('KeyA')
		await page.keyboard.up('Control')
		await page.keyboard.press('Backspace')
		await page.keyboard.type('(defn setup[] (js/createCanvas 1800 1800))')

		await page.click('#run-btn')
		const width2 = await page.$eval('#defaultCanvas0', e => e.getAttribute("width"))
		expect(width2).not.toMatch(width)
	})

	it('starts an invalid sketch', async () => {
		await page.click('.cm-editor')
		await page.keyboard.press('Backspace')

		await page.click('#run-btn')
		await expect(page.$('#defaultCanvas0')).resolves.toBeNull()
	})

	it('starts an invalid sketch, then starts a valid sketch', async () => {
		await page.click('.cm-editor')
		await page.keyboard.press('Backspace')

		await page.click('#run-btn')
		await expect(page.$('#defaultCanvas0')).resolves.toBeNull()

		await page.click('.cm-editor')
		await page.keyboard.type(')')

		await page.click('#run-btn')
		await expect(page.$('#defaultCanvas0')).resolves.toBeTruthy()
	})

	it('starts and stops a sketch with keyboard', async () => {
		await page.click('.cm-editor')
		await page.keyboard.down('Alt')
		await page.keyboard.press('Enter')
		await page.keyboard.up('Alt')

		await expect(page.$('#defaultCanvas0')).resolves.toBeTruthy()

		await page.keyboard.down('Alt')
		await page.keyboard.down('Shift')
		await page.keyboard.press('Enter')
		await page.keyboard.up('Alt')
		await page.keyboard.up('Shift')

		await expect(page.$('#defaultCanvas0')).resolves.toBeNull()
	})

	it('starts and stops a sketch with dropdown buttons', async () => {
		const initialUrl = page.url()

		await expect(page.$('#menu-button-sketch-dropdown')).resolves.toBeTruthy()

		await page.click('#menu-button-sketch-dropdown')
		await page.click('.dropdown-run')
		await expect(page.$('#defaultCanvas0')).resolves.toBeTruthy()
		expect(page.url()).not.toBe(initialUrl)

		//makes sure running a sketch doesn't break the menu
		await expect(page.$('#menu-button-sketch-dropdown')).resolves.toBeTruthy()

		await page.click('#menu-button-sketch-dropdown')
		await page.click('.dropdown-stop')
		await expect(page.$('#defaultCanvas0')).resolves.toBeNull()
	})

	it('expects chroma call without cdn to fail', async () => {
		await page.click('.cm-editor')
		await page.keyboard.down('Control')
		await page.keyboard.press('KeyA')
		await page.keyboard.up('Control')
		await page.keyboard.press('Backspace')
		await page.keyboard.type('(defn setup [] (js/createCanvas 400 400) (js/console.log (js/chroma "ffffff")))')
		await page.click('#run-btn')
		const style = await page.$eval('#defaultCanvas0', e => e.getAttribute("style"))
		expect(style).toBe("visibility: hidden; width: 400px; height: 400px;")
	})

	it('tests cdn links are addable, persistent and functional', async () => {
		// warm up p5
		await page.click('#run-btn')
		await expect(page.$('#defaultCanvas0')).resolves.toBeTruthy()
		await page.click('#stop-btn')
		await expect(page.$('#defaultCanvas0')).resolves.toBeNull()

		// add two cdn links
		await page.click('#menu-button-sketch-dropdown')
		await page.click(".dropdown-add-cdn")

		await page.click("#cdn-input")
		await page.keyboard.type("https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.js")
		await page.click("#add-cdn-button")

		await page.click("#cdn-input")
		await page.keyboard.type("https://cdnjs.cloudflare.com/ajax/libs/chroma-js/2.4.2/chroma.min.js")
		await page.click("#add-cdn-button")

		await page.$$('.cdn-link').then(els => { expect(els.length).toBe(2) })
		expect(page.url()).toBe("http://localhost:5173/?sketch=00hJTctTKE4tKS1QiI7lUlDQyCrWTy5KTSxJdU7MK0ssVjAxMABhTU0uiNqUosRyhNKkxOTs9KL80rwUBSMjoCIA&cdn=yygpKSi20tdPTsnLKtZLzskvTUnLSSxK1UvOz9VPzEqs0M%2FJTCrWL8nPS9U3NNGz0DOx1A8BcvSyigE%3D&cdn=LcfBDYAgDAXQiexPiCe3qUUDDaWGYuL4Xji%2BMucTByC5a5A0f%2FPdeFwkbmDlD62eASnDjTcNJNopLZPVTho%2F")

		await page.click("#close-cdn-modal-button")

		// test chroma js does not throw error
		await page.click('.cm-editor')
		await page.keyboard.down('Control')
		await page.keyboard.press('KeyA')
		await page.keyboard.up('Control')
		await page.keyboard.press('Backspace')
		await page.keyboard.type('(defn setup [] (js/createCanvas 400 400) (js/console.log (js/chroma "ffffff")))')

		await page.click('#run-btn')
		await expect(page.$('#defaultCanvas0')).resolves.toBeTruthy()

		let style = await page.$eval('#defaultCanvas0', e => e.getAttribute("style"))
		expect(style).toBe("width: 400px; height: 400px;")

		// test persistence
		await page.reload()
		await page.click('#run-btn')
		await expect(page.$('#defaultCanvas0')).resolves.toBeTruthy()

		style = await page.$eval('#defaultCanvas0', e => e.getAttribute("style"))
		expect(style).toBe("width: 400px; height: 400px;")
	})

	it('tests that the console toggleable', async () => {
		await expect(page.$('#editor-console')).resolves.toBeTruthy()
		const height = await page.$eval('#editor-console', e => e.offsetHeight)
		expect(height).toBe(0)

		await page.click('#toggle-console-btn')
		await expect(page.$('#editor-console')).resolves.toBeTruthy()
		const openHeight = await page.$eval('#editor-console', e => e.offsetHeight)
		expect(openHeight).toBeGreaterThan(height)

		await page.click('#toggle-console-btn')
		await expect(page.$('#editor-console')).resolves.toBeTruthy()
		const closeHeight = await page.$eval('#editor-console', e => e.offsetHeight)
		expect(closeHeight).toBe(height)
	})

	it('tests that the console is logging and clearing correctly', async () => {
		await page.click('.cm-editor')
		await page.keyboard.down('Control')
		await page.keyboard.press('KeyA')
		await page.keyboard.up('Control')
		await page.keyboard.press('Backspace')
		await page.keyboard.type('(println "HELLO")')

		await page.click('#run-btn')

		expect(await page.$eval('#editor-console', e => e.children[0].children.length))
			.toBe(1)

		await page.click('.cm-editor')
		await page.keyboard.down('Control')
		await page.keyboard.press('KeyA')
		await page.keyboard.up('Control')
		await page.keyboard.press('Backspace')
		await page.keyboard.type('(println "HELLO")(println "HELLO 2")')
		await page.click('#run-btn')
		expect(await page.$eval('#editor-console', e => e.children[0].children.length))
			.toBe(2)

		await page.click('#clear-console-btn')
		expect(await page.$eval('#editor-console', e => e.children[0].children.length))
			.toBe(0)
	})

})

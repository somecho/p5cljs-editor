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
		await page.keyboard.down('ControlLeft')
		await page.keyboard.press('KeyA')
		await page.keyboard.up('ControlLeft')
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
})

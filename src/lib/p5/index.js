import cljs from '../cljs'
/**
 * p5 global structure and event functions
 */
const p5Methods = {
	//structure
	preload: () => { },
	setup: () => { },
	draw: () => { },
	//key events
	keyReleased: () => { },
	keyPressed: () => { },
	keyTyped: () => { },
	//device events
	deviceMoved: () => { },
	deviceTurned: () => { },
	deviceShaken: () => { },
	//mouse events
	mouseMoved: () => { },
	mouseDragged: () => { },
	mousePressed: () => { },
	mouseReleased: () => { },
	mouseClicked: () => { },
	doubleClicked: () => { },
	//touch events
	touchStarted: () => { },
	touchMoved: () => { },
	touchEnded: () => { },
}

/**
 * Attaches all defined user methods (which are p5 methods) to the window object
 */
function assignWindowGlobals() {
	Object.keys(p5Methods).forEach((key => {
		window[key] = cljs.user[key] || p5Methods[key]
	}))
}

/**
 * Used for removing P5 CDN script from dedicated HTML element.
 * @param {string} id - ID of dedicated HTML parent element holding P5 CDN script
 */
export function clearP5import(id) {
	let scriptEl = document.getElementById(id).firstElementChild;
	if (scriptEl) {
		scriptEl.remove()
	}
}

/**
 * Removes P5 global functions from window.
 */
export function clearWindowGlobals() {
	Object.keys(p5Methods).forEach((key => {
		window[key] = undefined;
	}))
}

/**
 * Compiles CLJS source, appends it to HTML element to make globally available.
 * @param {string} source - cljs source.
 * @param {string} id - ID of HTML Element to hold user's script.
 */
export function compileAndSet(source, id) {
	const compiled = cljs.compile(source)
	if (!compiled.name) {
		const scriptHolder = document.getElementById(id)
		if (scriptHolder.firstElementChild) {
			scriptHolder.firstElementChild.remove()
		}
		cljs.user = p5Methods;
		const script = document.createElement("script")
		script.innerHTML = compiled;
		scriptHolder.appendChild(script)
		assignWindowGlobals()
		return null
	} else {
		return compiled.cause.message
	}
}

/**
 * Creates script element with P5 CDN and inserts it into dedicated HTML element.
 * @param {string} id - ID of dedicated HTML parent to hold P5 script
 */
export function importP5(id) {
	const script = document.createElement("script")
	script.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.min.js")
	document.getElementById(id).appendChild(script)
}

/**
 * Deletes the default canvas created by P5 on run.
 */
export function removeDefaultCanvas() {
	let canvas = document.getElementById("defaultCanvas0")
	if (canvas) {
		canvas.remove()
	}
}

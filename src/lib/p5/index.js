import { cljs } from '../cljs'

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
 * Removes P5 global functions like setup and draw from window.
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
 * Creates a script element with P5 CDN and returns it.
 * @returns {string} html literal
 */
export function createP5ScriptTag(){
	const script = document.createElement("script")
	script.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.min.js")
	return script;
}

/**
 * Removes an element from the DOM if it exists.
 * @param {string} id - id of the element to be removed from the dom
 */
export function removeElementById(id){
	let elt = document.getElementById(id)
	if(elt){
		elt.remove()
	}
}

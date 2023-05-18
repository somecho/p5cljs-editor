/**
 * Used for removing P5 CDN script from dedicated HTML element.
 * @param {string} id - ID of dedicated HTML parent element holding P5 CDN script
 */
export function clearP5import(id){
		let scriptEl = document.getElementById(id).firstElementChild;
		if (scriptEl) {
			scriptEl.remove()
		}
}

/**
 * Removes P5 global functions from window.
 */
export function clearWindowGlobals(){
	window.draw = undefined;
	window.setup = undefined;
}

/**
 * Compiles CLJS source and sets global P5 functions.
 * @param {string} source - cljs source.
 */
export function compileAndSet(source){
		cljs.user = { setup: () => { }, draw: () => { } }
		eval(cljs.compile(source))
		window.setup = cljs.user.setup;
		window.draw = cljs.user.draw;
}

/**
 * Creates script element with P5 CDN and inserts it into dedicated HTML element.
 * @param {string} id - ID of dedicated HTML parent to hold P5 script
 */
export function importP5(id){
		const script = document.createElement("script")
		script.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.min.js")
		document.getElementById(id).appendChild(script)
}

/**
 * Deletes the default canvas created by P5 on run.
 */
export function removeDefaultCanvas(){
		let canvas = document.getElementById("defaultCanvas0")
		if (canvas) {
			canvas.remove()
		}
}

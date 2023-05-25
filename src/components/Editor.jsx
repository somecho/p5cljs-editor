import CodeMirror from '@uiw/react-codemirror'
import { clojure } from '@nextjournal/lang-clojure'
import { useEffect, useState } from 'react'
import { clearWindowGlobals, p5Methods, assignWindowGlobals, createP5ScriptTag, removeElementById } from '../lib/p5'
import { useSearchParams } from 'react-router-dom'
import { defaultSketch, compile } from '../lib/cljs'
import { encode, decode } from "../lib/compression"

const Editor = () => {
	const [source, setSource] = useState("")
	const [initialized, setInitialized] = useState(false);
	const [urlParams, setUrlParams] = useSearchParams();
	const [error, setError] = useState(null);

	useEffect(() => {
		setSource(defaultSketch)
		if (urlParams.get("sketch")) {
			setSource(decode(urlParams.get("sketch")))
		}
	}, [])

	function run() {
		// PREPARE P5
		const compileResult = compile(source)
		if (compileResult.name != "Error") {
			removeElementById('user-sketch')

			window.cljs.user = p5Methods;

			const script = document.createElement("script")
			script.setAttribute("id", "user-sketch")
			script.innerHTML = compileResult;
			document.getElementById('user-script').appendChild(script)

			assignWindowGlobals()
		} else {
			console.error(compileResult.cause.message)
		}

		if (!initialized) {
			setInitialized(true)
			document
				.getElementById("p5-script")
				.appendChild(createP5ScriptTag())
		}

		if (initialized && !error) {
			// For re-running a sketch after the very first run,
			// since P5 does not automatically restart when setup()
			// is updated.
			cljs.user.setup();
		}

		new MutationObserver(() => {
			const p5canvas = document.getElementById("defaultCanvas0")
			if (p5canvas) {
				document.getElementById("canvas-parent").appendChild(p5canvas);
			}
			const canvasContainer = document.querySelector("main")
			if (canvasContainer) {
				canvasContainer.remove();
			}
		}).observe(document.body, { childList: true });

		setUrlParams({ sketch: encode(source) })
	}

	function stop() {
		// CLEAR ANY STATE
		clearWindowGlobals();
		removeElementById("p5-cdn");
		removeElementById("defaultCanvas0")
	}

	return (
		<div>
			<div id="p5-script"></div>
			<div id="user-script"></div>
			<button
				className="m-2 px-2 py-1 bg-fuchsia-600 rounded text-white font-black"
				onClick={run}
			>run</button>
			<button
				className="m-2 px-2 py-1 bg-neutral-400 rounded text-white font-black"
				onClick={stop}
			>stop</button>
			<div className="flex justify-evenly">
				<CodeMirror
					value={source}
					extensions={[clojure()]}
					onChange={e => setSource(e)}
					height="75vh"
					className="grow shrink border border-neutral-200 w-0 rounded m-2"
				/>
				<div id="canvas-parent" className="grow shrink w-0 m-2">
				</div>
			</div>
		</div>
	)
}

export default Editor;

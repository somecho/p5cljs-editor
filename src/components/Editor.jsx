import CodeMirror from '@uiw/react-codemirror'
import { clojure } from '@nextjournal/lang-clojure'
import { useEffect, useState } from 'react'
import { clearP5import, clearWindowGlobals, compileAndSet, importP5, removeDefaultCanvas } from '../utils'
import { useSearchParams } from 'react-router-dom'

const defaultSketch = `(defn setup []
  (js/createCanvas 400 400))
(defn draw []
  (js/background 220))`

const Editor = () => {
	const [source, setSource] = useState("")
	const [initialized, setInitialized] = useState(false);
	const [urlParams, setUrlParams] = useSearchParams();
	useEffect(() => {
		setSource(defaultSketch)
		if (urlParams.get("sketch")) {
			setSource(atob(urlParams.get("sketch")))
		}
	}, [])

	function run() {
		// PREPARE P5
		compileAndSet(source, "user-script")
		importP5("p5-script");

		if (initialized) {
			// For re-running a sketch after the very first run,
			// since P5 does not automatically restart when setup()
			// is updated.
			cljs.user.setup();
		}
		if (!initialized) {
			setInitialized(true)
		}

		var targetNode = document.body;
		var config = { childList: true };
		var callback = function () {
			const p5canvas = document.getElementById("defaultCanvas0")
			if (p5canvas) {
				document.getElementById("canvas-parent").appendChild(p5canvas);
			}
			const canvasContainer = document.querySelector("main")
			if (canvasContainer) {
				canvasContainer.remove();
			}
		};
		var observer = new MutationObserver(callback);
		observer.observe(targetNode, config);

		setUrlParams({ sketch: btoa(source) })
	}

	function stop() {
		// CLEAR ANY STATE
		clearWindowGlobals();
		clearP5import("p5-script");
		removeDefaultCanvas()
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

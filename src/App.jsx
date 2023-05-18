import CodeMirror from '@uiw/react-codemirror'
import { clojure } from '@nextjournal/lang-clojure'
import { useState } from 'react'

function App() {
	const [source, setSource] = useState("")
	const [initialized, setInitialized] = useState(false);

	function run() {
		window.draw = null;
		window.setup = null;

		let scriptEl = document.getElementById("p5-script").firstElementChild;
		if (scriptEl) {
			scriptEl.remove()
		}

		cljs.user = { setup: () => { }, draw: () => { } }

		eval(cljs.compile(source))

		window.setup = cljs.user.setup;
		window.draw = cljs.user.draw;

		let canvas = document.getElementById("defaultCanvas0")
		if (canvas) {
			canvas.remove()
		}

		const script = document.createElement("script")
		script.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.min.js")
		document.getElementById("p5-script").appendChild(script)

		if (initialized) {
			cljs.user.setup();
		}
		if (!initialized) {
			setInitialized(true)
		}
	}

	return (
		<div>
			<div id="p5-script">
			</div>
			<button onClick={run}>run</button>
			<div>
				<CodeMirror
					extensions={[clojure()]}
					onChange={e => setSource(e)}
					height="300px"
				/>
				<div className="canvas-parent"></div>
			</div>
		</div>
	)
}

export default App

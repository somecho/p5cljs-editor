import CodeMirror from '@uiw/react-codemirror'
import { clojure } from '@nextjournal/lang-clojure'
import { useState } from 'react'
import { clearP5import, clearWindowGlobals, compileAndSet, importP5, removeDefaultCanvas } from '../utils'

const Editor = () => {
	const [source, setSource] = useState("")
	const [initialized, setInitialized] = useState(false);

	function run() {
		// CLEAR ANY STATE
		clearWindowGlobals();
		clearP5import("p5-script");
		removeDefaultCanvas()
		// PREPARE P5
		compileAndSet(source)
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

export default Editor;

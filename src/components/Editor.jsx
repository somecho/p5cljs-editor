import CodeMirror from '@uiw/react-codemirror'
import { clojure } from '@nextjournal/lang-clojure'
import { useEffect, useState } from 'react'
import { clearWindowGlobals, p5Methods, assignWindowGlobals, createP5ScriptTag, removeElementById } from '../lib/p5'
import { useSearchParams } from 'react-router-dom'
import { defaultSketch, compile } from '../lib/cljs'
import { encode, decode } from "../lib/compression"
import p5 from 'p5'
import { keymap } from '@codemirror/view'
import { Text, Flex, Box, Button } from '@chakra-ui/react'

const Editor = ({ setMethods }) => {
	const [source, setSource] = useState("")
	const [urlParams, setUrlParams] = useSearchParams();
	const [error, setError] = useState(null);
	const extensions = [
		clojure(),
		keymap.of([
			{
				key: "Alt-Enter",
				run: () => { run(); return true; }
			}, {
				key: "Alt-Shift-Enter",
				run: () => { stop(); return true; }
			}
		])
	]

	useEffect(() => {
		setSource(defaultSketch)
		if (urlParams.get("sketch")) {
			setSource(decode(urlParams.get("sketch")))
		}
	}, [])

	function run() {
		stop()
		// PREPARE P5
		const compileResult = compile(source)
		if (compileResult.name != "Error") {
			removeElementById('user-sketch')

			window.cljs.user = p5Methods;

			const script = document.createElement("script")
			script.setAttribute("id", "user-sketch")
			script.innerHTML = compileResult;
			document.getElementById('editor').appendChild(script)

			assignWindowGlobals()
			setError("")
		} else {
			setError(compileResult.cause.message)
			console.error(compileResult.cause.message)
		}

		if (compileResult.name != "Error") {
			new p5()
			const p5canvas = document.getElementById('defaultCanvas0')
			if (p5canvas) {
				document.getElementById("canvas-parent").appendChild(p5canvas);
			}
			const canvasContainer = document.querySelector("main")
			if (canvasContainer) {
				canvasContainer.remove();
			}
		}

		setUrlParams({ sketch: encode(source) })
	}

	function stop() {
		clearWindowGlobals();
		removeElementById("defaultCanvas0")
	}

	useEffect(() => {
		setMethods({ run, stop })
	}, [source])

	return (
		<Box id="editor" pt="6">
			<Button
				backgroundColor="pink.500"
				color="white"
				id="run-btn"
				onClick={run}
				mx="2"
				p="3"
				fontWeight="bold"
			>
				run
			</Button>
			<Button
				backgroundColor="gray.200"
				color="gray.600"
				p="3"
				mx="2"
				onClick={stop}
				id="stop-btn"
				fontWeight="bold"
			>
				stop
			</Button>
			<Flex>
				<Box
					flex="1"
					border="1px"
					borderColor="gray.200"
					borderRadius="md"
					overflow="hidden"
					m="2"
				>
					<CodeMirror
						value={source}
						extensions={extensions}
						onChange={e => setSource(e)}
						height="70vh"
					/>
				</Box>
				<Box flex="1" id="canvas-parent" m="2" />
			</Flex>
		</Box >
	)
}

export default Editor;

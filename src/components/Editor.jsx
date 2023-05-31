import CodeMirror from '@uiw/react-codemirror'
import { clojure } from '@nextjournal/lang-clojure'
import { useEffect, useState } from 'react'
import { clearWindowGlobals, p5Methods, assignWindowGlobals, removeElementById, clearCljsUserGlobals } from '../lib/p5'
import { useSearchParams } from 'react-router-dom'
import { defaultSketch, compile } from '../lib/cljs'
import { encode, decode } from "../lib/compression"
import p5 from 'p5'
import { keymap } from '@codemirror/view'
import { Text, Flex, Box, Button, Tag } from '@chakra-ui/react'
import EditorConsole from './EditorConsole'

const Editor = ({ setMethods }) => {
	const [source, setSource] = useState("")
	const [urlParams, setUrlParams] = useSearchParams();
	const [consoleOpen, setConsoleOpen] = useState(false);
	const [logs, setLogs] = useState([])
	const [numErrors, setNumErrors] = useState(0)
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
	useEffect(() => {
		setNumErrors(logs.filter(log => log.method == 'error').length)
	}, [logs])

	function run() {
		setLogs([])
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
		} else {
			console.error(compileResult.cause.message)
		}

		if (compileResult.name != "Error") {
			try {
				new p5()
			} catch (e) {
				console.error(e)
			}
			const p5canvas = document.getElementById('defaultCanvas0')
			if (p5canvas) {
				document.getElementById("canvas-parent").appendChild(p5canvas);
			}
			const canvasContainer = document.querySelector("main")
			if (canvasContainer) {
				canvasContainer.remove();
			}
		}

		const params = {}
		let cdns = []
		for (const param of urlParams.entries()) {
			if (param[0] == "cdn") {
				cdns = [...cdns, param[1]]
			} else {
				params[param[0]] = param[1]
			}
		}
		params["sketch"] = encode(source)
		params["cdn"] = cdns
		setUrlParams(params)
	}

	function stop() {
		if (window.cljs.user) {
			clearCljsUserGlobals()
		}
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
			<Flex
			>
				<Box
					flex="1"
					border="1px"
					borderColor="gray.200"
					borderRadius="md"
					overflow="hidden"
					m="2"
					h="100%"
				>
					<CodeMirror
						value={source}
						extensions={extensions}
						onChange={e => setSource(e)}
						transition="0.5s"
						height={consoleOpen ? "55vh" : "75vh"}
					/>
					<Flex backgroundColor="#d9d9d9" justify="space-between">
						{
							numErrors > 0 ?
								<Tag
									fontSize="xs"
									backgroundColor="red"
									color="white"
								>{numErrors} error{numErrors > 1 ? "s" : ""}</Tag>
								:
								<span />
						}
						<Box>
							<Button
								variant="ghost"
								size="xs"
								color="gray.700"
								colorScheme="pink"
								borderRadius="0"
								id="clear-console-btn"
								onClick={() => { setLogs([]) }}
							>
								clear
							</Button>
							<Button
								variant="ghost"
								size="xs"
								color="gray.700"
								colorScheme="pink"
								borderRadius="0"
								id="toggle-console-btn"
								onClick={() => { setConsoleOpen(!consoleOpen) }}
							>
								console {consoleOpen ? "▼" : "▲"}
							</Button>
						</Box>
					</Flex>
					<EditorConsole open={consoleOpen} logs={logs} setLogs={setLogs} />
				</Box>
				<Box flex="1" id="canvas-parent" m="2" />
			</Flex>
		</Box >
	)
}

export default Editor;

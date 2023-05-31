import { Console, Hook, Unhook } from 'console-feed'
import { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'

const EditorConsole = ({ logs, setLogs, open }) => {
	useEffect(() => {
		const hookedConsole = Hook(
			window.console,
			(log) => setLogs((curLogs) => [...curLogs, log]),
			false
		)
		return () => Unhook(hookedConsole)
	}, [])
	return (
		<Box height={open ? "20vh" : "0vh"} overflowY="auto" id="editor-console">
			<Console logs={logs} variant="light" />
		</Box>
	)
}

export default EditorConsole;

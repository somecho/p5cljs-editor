import Article from './components/Article'
import Editor from './components/Editor'
import MainLayout from './layout/MainLayout'
import { Routes, Route } from "react-router-dom"
import { useState } from 'react'


const App = () => {
	const [about, setAbout] = useState("")
	const [tutorial, setTutorial] = useState("")

	import("./pages/about.md").then(res => {
		fetch(res.default)
			.then(res => res.text())
			.then(text => setAbout(text))
	})
	import("./pages/tutorial.md").then(res => {
		fetch(res.default)
			.then(res => res.text())
			.then(text => setTutorial(text))
	})

	return (
		<Routes>
			<Route path="" element={<MainLayout />}>
				<Route index element={<Editor />} />
				<Route path="about" element={<Article markdown={about} />} />
				<Route path="tutorial" element={<Article markdown={tutorial} />} />
			</Route>
		</Routes>
	)
}

export default App

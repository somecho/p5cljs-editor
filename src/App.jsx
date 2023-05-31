import Article from './components/Article'
import Editor from './components/Editor'
import MainLayout from './layout/MainLayout'
import { Routes, Route } from "react-router-dom"
import { useState } from 'react'


const App = () => {
	const [tutorial, setTutorial] = useState("")
	const [changelog, setChangelog] = useState("")
	const [gallery, setGallery] = useState("")
	const [methods, setMethods] = useState(null)

	import("./pages/tutorial.md").then(res => {
		fetch(res.default)
			.then(res => res.text())
			.then(text => setTutorial(text))
	})

	import("../gallery.md").then(res => {
		fetch(res.default)
			.then(res => res.text())
			.then(text => setGallery(text))
	})
	import('../CHANGELOG.md').then(res => {
		fetch(res.default)
			.then(res => res.text())
			.then(text => setChangelog(text))
	})

	return (
		<>
			<div id="cdn-container" />
			<Routes>
				<Route path="" element={<MainLayout methods={methods} />}>
					<Route index element={<Editor setMethods={setMethods} />} />
					<Route path="tutorial" element={<Article markdown={tutorial} />} />
					<Route path="changelog" element={<Article markdown={changelog} />} />
					<Route path="gallery" element={<Article markdown={gallery} />} />
				</Route>
			</Routes>
		</>
	)
}

export default App

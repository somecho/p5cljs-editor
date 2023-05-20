import Article from './components/Article'
import Editor from './components/Editor'
import MainLayout from './layout/MainLayout'
import { Routes, Route } from "react-router-dom"

import AboutMD from './pages/about.md?raw'
import TutorialMD from './pages/tutorial.md?raw'

const App = () => {
	return (
		<Routes>
			<Route path="" element={<MainLayout />}>
				<Route index element={<Editor />} />
				<Route path="about" element={<Article markdown={AboutMD} />} />
				<Route path="tutorial" element={<Article markdown={TutorialMD} />} />
			</Route>
		</Routes>
	)
}

export default App

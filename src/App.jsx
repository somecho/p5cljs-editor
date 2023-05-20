import About from './components/About'
import Editor from './components/Editor'
import Tutorial from './components/Tutorial'
import MainLayout from './layout/MainLayout'
import { Routes, Route } from "react-router-dom"

const App = () => {
	return (
		<Routes>
			<Route path="" element={<MainLayout />}>
				<Route index element={<Editor />} />
				<Route path="about" element={<About />} />
				<Route path="tutorial" element={<Tutorial />} />
			</Route>
		</Routes>
	)
}

export default App

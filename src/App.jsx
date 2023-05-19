import About from './components/About'
import Editor from './components/Editor'
import MainLayout from './layout/MainLayout'
import { Routes, Route } from "react-router-dom"

const App = () => {
	return (
		<Routes>
			<Route path="" element={<MainLayout />}>
				<Route index element={<Editor />} />
				<Route path="about" element={<About />} />
			</Route>
		</Routes>
	)
}

export default App

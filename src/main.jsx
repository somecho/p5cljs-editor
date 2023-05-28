import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/provider'
import './index.css'
import "highlight.js/styles/stackoverflow-light.css"

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ChakraProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ChakraProvider>
	</React.StrictMode>,
)

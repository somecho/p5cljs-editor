/**
 * @jest-environment jsdom
 */

import {render, cleanup, screen} from '@testing-library/react'
import App from './App'
import {BrowserRouter} from 'react-router-dom'


it('renders the app',()=>{
	const wrapper = render(<Editor />, {wrapper: BrowserRouter})
})

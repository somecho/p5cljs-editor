/**
 * @jest-environment jsdom
 */

import { render, cleanup, screen } from '@testing-library/react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

global.fetch = jest.fn(() => Promise.resolve({
	default: "some/path",
	text: () => {
		return "some markdown"
	}
}))

it('renders the app', () => {
	const wrapper = render(<App />, { wrapper: BrowserRouter })
})

/**
 * @jest-environment jsdom
 */

import { render, cleanup, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

global.fetch = jest.fn(() => Promise.resolve({
	default: "some/path",
	text: () => {
		return "some markdown"
	}
}))

jest.mock('./lib/cljs', () => {
	const originalModule = jest.requireActual('./lib/cljs')
	return {
		__esModule: true,
		...originalModule,
		compile: jest.fn((source) => `
			cljs.user.setup = (function cljs$user$setup(){
				return createCanvas((400),(400));
			});
			cljs.user.draw = (function cljs$user$draw(){
			return background((220));
			});`)
	}
})

beforeEach(() => {
	render(<App />, { wrapper: BrowserRouter })
})

describe('App integration test', () => {

	it('checks the UI is complete', () => {
		expect(screen.getByText('p5.cljs')).toBeInTheDocument()
		expect(screen.getByText('run')).toBeInTheDocument()
		expect(screen.getByText('stop')).toBeInTheDocument()
		expect(screen.getByText('Editor')).toBeInTheDocument()
		expect(screen.getByText('About')).toBeInTheDocument()
		expect(screen.getByText('Tutorial')).toBeInTheDocument()
	})

	it('checks the holder divs are present', () => {
		expect(document.getElementById('p5-script')).toBeTruthy()
		expect(document.getElementById('user-script')).toBeTruthy()
	})

	it('starts the sketch', () => {
		window.cljs = { ...window.cljs, user: {} }

		screen.getByText('run').click()
		console.log(document.getElementById('editor').innerHTML)
		expect(document.getElementById('defaultCanvas0')).toBeTruthy()

	})

})

/**
 * @jest-environment jsdom
 */
import { render, cleanup, fireEvent, getByLabelText, screen } from '@testing-library/react'
import Editor from './Editor'
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup)

it('renders editor', () => {
	const wrapper = render(<Editor />, { wrapper: BrowserRouter })
	expect(wrapper).toBeTruthy();

	expect(document.getElementById("canvas-parent").firstElementChild).toBeFalsy();

	fireEvent.click(screen.getByRole('button', { name: /run/i }));
})

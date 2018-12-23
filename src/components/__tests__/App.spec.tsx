import * as React from 'react'
import { render, fireEvent, waitForElement } from 'react-testing-library'

import App from '../App'

/**
 * Just a simple integration tests
 */

test('App Component renders with toggle switch', () => {
  const wrap = render(<App />)

  expect(wrap.getByTestId('toggle-container')).toBeTruthy()
})

test('App Component can change toggle status with clicking toggle switch', async () => {
  const { container, getByTestId } = render(<App />)
  const toggleButton = getByTestId('toggle-button')

  fireEvent.click(toggleButton)
  let changedContainer = await waitForElement(
    () => getByTestId('toggle-container'),
    { container }
  )
  expect(changedContainer.textContent).toBe('The button is on')
  expect(toggleButton.classList.contains('toggle-btn-on')).toBe(true)

  fireEvent.click(toggleButton)
  changedContainer = await waitForElement(
    () => getByTestId('toggle-container'),
    { container }
  )
  expect(changedContainer.textContent).toBe('The button is off')
  expect(toggleButton.classList.contains('toggle-btn-off')).toBe(true)
})

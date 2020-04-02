// simple test with React Testing Library
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Counter from '../../components/counter'

test('counter increments when the button is clicked', () => {
  const {container} = render(<Counter />)
  const [decrement, increment] = container.querySelectorAll('button')
  const message = container.firstChild.querySelector('div')

  expect(message.textContent).toBe('Current count: 0')
  fireEvent.click(increment)
  expect(message.textContent).toBe('Current count: 1')
  fireEvent.click(decrement)
  expect(message.textContent).toBe('Current count: 0')
})
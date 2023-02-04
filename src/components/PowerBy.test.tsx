import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PowerBy from './PowerBy'

describe('PowerBy.tsx', () => {
  test('Should render h1', () => {
    const { container } = render(<PowerBy />)
    const h1 = container.querySelector('h1')
    expect(h1?.textContent).toBe('React + Vite + Vite Test + Cypress + Tailwind Css + CucumberJs')
  })
})

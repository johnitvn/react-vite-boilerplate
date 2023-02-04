import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PowerBy from './PowerBy'

describe('PowerBy.tsx', () => {
  test('Should render h1', () => {
    render(<PowerBy />)
    expect(screen.getByText(/React/i)).toBeInTheDocument()
    expect(screen.getByText(/^Vite$/i)).toBeInTheDocument()
    expect(screen.getByText(/Vite Test/i)).toBeInTheDocument()
    expect(screen.getByText(/Cypress/i)).toBeInTheDocument()
    expect(screen.getByText(/Tailwind Css/i)).toBeInTheDocument()
    expect(screen.getByText(/Cucumber/i)).toBeInTheDocument()
  })
})

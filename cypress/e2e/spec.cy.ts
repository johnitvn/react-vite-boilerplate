import '../support/e2e'

describe('Main spec', () => {
  it('display technology stack', () => {
    cy.visit('/')
    cy.get('h1').should('contain.text', 'React + Vite + Vite Test + Cypress + Tailwind Css')
  })
})

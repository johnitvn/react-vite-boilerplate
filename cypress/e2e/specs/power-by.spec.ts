import '../../support/e2e'

describe('PowerBy feature', () => {
  it('display technology stack', () => {
    cy.visit('/')
    cy.get('#root').should('contain.text', 'React')
    cy.get('#root').should('contain.text', 'Vite')
    cy.screenshot()
  })
})

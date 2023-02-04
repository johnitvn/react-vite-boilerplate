import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

When('i visit home page', () => {
  cy.visit('/')
})

Then('i should see technology stack', () => {
  cy.get('#root').should('contain.text', 'React')
  cy.get('#root').should('contain.text', 'Vite')
  cy.screenshot()
})

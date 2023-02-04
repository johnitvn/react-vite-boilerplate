import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

When('i visit home page', () => {
  cy.visit('/')
})

Then('i should see technology stack', () => {
  cy.get('h1').should('contain.text', 'React + Vite + Vite Test + Cypress + Tailwind Css')
  cy.screenshot()
})

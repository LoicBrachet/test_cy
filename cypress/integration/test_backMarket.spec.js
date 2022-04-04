import { faker } from '@faker-js/faker';

describe('Test 1', () => {
  it('Inscription au compte de BackMarket', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.get('#firstName').click({force: true})
      .type('faker.name.firstName()')
    cy.get('#lastName').click({force: true})
      .type('faker.name.lastName()')
    cy.get('#signup-email').click({force: true})
      .type('faker.internet.email()')
  })
})
describe('Test2', ()=>{
    it('Valider un formulaire', ()=>{
    cy.visit('https://preprod.backmarket.fr/register')
    cy.get('#signup-password').click({force: true})
      .type('faker.internet.password()')
    cy.contains('Enchanté!').click({force: true})
    }) 
})

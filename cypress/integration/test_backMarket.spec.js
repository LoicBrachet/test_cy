import { faker } from '@faker-js/faker';
{/* <reference types = "cypress"/> */}
  let firstName= faker.name.firstName();
  let lastName= faker.name.lastName();
  let email= faker.internet.email();
  let password= faker.internet.password()

describe('Test passant: inscription', () => {
  it('formulaire valide', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.get('#firstName').click({force: true})
      .type(firstName)
    cy.get('#lastName').click({force: true})
      .type(lastName)
    cy.get('#signup-email').click({force: true})
      .type(email)
    cy.get('#signup-password').click({force: true})
      .type(password)
    cy.contains('Enchantés').click({force: true})
  })
})
describe('Test non-passant: inscription', ()=>{
    it('formulaire invalide', ()=>{
    cy.visit('https://preprod.backmarket.fr/register')
     cy.get('#firstName').click({force: true})
      .type(firstName)
    cy.get('#lastName').click({force: true})
      .type(lastName)
    cy.get('#signup-email').click({force: true})
      .type(email)
    cy.get('#signup-password').click({force: true})
      .type('')
    cy.contains('Enchantés').click({force: true})
    }) 
})
describe('Test passant: connexion', ()=>{
    it('formulaire connexion valide', ()=>{
    cy.visit('https://preprod.backmarket.fr/register')
   
    cy.get('#signin-email').click({force: true})
      .type(email)
    cy.get('#signin-password').click({force: true})
      .type(password)
    cy.contains('Enchantés').click({force: true})
    }) 
})
describe('Test non-passant: connexion', ()=>{
    it('formulaire connexion invalide', ()=>{
    cy.visit('https://preprod.backmarket.fr/register')
    cy.get('#signin-email').click({force: true})
      .type(email)
    cy.get('#signin-password').click({force: true})
      .type('')
    cy.contains('Enchantés').click({force: true})
    }) 
})

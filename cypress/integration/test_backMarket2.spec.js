import { faker } from '@faker-js/faker';
/// <reference types = "cypress"/> 
  let firstName= faker.name.firstName();
  let lastName= faker.name.lastName();
  let email= faker.internet.email();
  let password= faker.internet.password()

   describe('Tests backmarket', () => {
        it('formulaire connexion valide', ()=>{
    cy.get('#signin-email').click({force: true})
      .type(email)
    cy.get('#signin-password').click({force: true})
      .type(password)
    cy.contains('Welcome Back').click({force: true})
    cy.url().should('eq', 'https://preprod.backmarket.fr/dashboard/orders')
    cy.contains('Chef, oui Chef !!').should('be.visible')
    }) 
})
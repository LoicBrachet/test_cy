import { faker } from '@faker-js/faker';
/// <reference types = "cypress"/> 
  let firstName= faker.name.firstName();
  let lastName= faker.name.lastName();
  let email= faker.internet.email();
  let password= faker.internet.password()

   describe('Tests backmarket', () => {
        it('formulaire connexion invalide', ()=>{
    cy.get('#signin-email').click({force: true})
      .type(email)
    cy.get('#signin-password').click({force: true})
    cy.contains('Welcome Back').click({force: true})
    cy.contains('Le champ mot de passe est obligatoire').should('be.visible')
    }) 
})
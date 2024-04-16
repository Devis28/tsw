describe('Form testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('test custom command ', () => {
    cy.getByData("hero-heading").contains("Testing Next.js Applications with Cypress")
  })

  it('Prihlasit sa do newslettra ', () => {
    cy.getByData("email-input").type("david.teplan@student.ukf.sk")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("exist").contains("david.teplan@student.ukf.sk")
  })

  it('Prihlasit sa do newslettra ', () => {
    cy.getByData("email-input").type("david")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
  })
})
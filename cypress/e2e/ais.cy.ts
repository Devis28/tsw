describe('AIS login', () => {
  beforeEach(() => {
    cy.visit('ais2.ukf.sk/ais/start.do')
  })



  it('Prihlasit sa do newslettra ', () :void => {
    cy.get("#login").type("meno")
    cy.get("#heslo").type("heslo")
    cy.get("#login-form-submit-btn").click()
    cy.get(".login-error").should("not.exist")
  })

})
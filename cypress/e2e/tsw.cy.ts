describe('TSW', () => {
  beforeEach(() => {
    cy.visit('https://uis.ukf.sk/?lang=sk')
  })


  it('UIS - kontrola platby', () :void => {
    cy.get('[href="/auth/?lang=sk"] > b > .nowrap').click()
    cy.get("#loginform").should("exist")
    cy.get('#credential_0').type("meno")
    cy.get('#credential_1').type("heslo")
    cy.get('#login-btn').click()
    cy.wait(1000)
    cy.get('.ko > .text').should("not.exist")
    cy.get('#sekce-34 > .ramecek-boky > :nth-child(1) > .polozky > ul > :nth-child(2) > a').click()
    cy.get('.ok > .text').should("exist").contains("Študent má k dnešnému dňu uhradené ubytovanie.")
  })

})
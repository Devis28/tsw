describe('Home page test', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('Porovnanie nadpisu H1', () => {
      cy.get("h1").contains("Testing Next.js Applications with Cypress")
    })
  
    it('Porovnanie nadpisu HTML atribut', () => {
      cy.get("[data-test='hero-heading']").contains("Testing Next.js Applications with Cypress")
    })
  
    it('Porovnanie obsahu v DT', () => {
      cy.get("dt").eq(0).contains("4 Courses")
    })
  })
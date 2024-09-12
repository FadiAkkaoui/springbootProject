/* eslint-disable no-undef */
describe('UI design', () => {
  it('passes', () => {
    cy.viewport(420, 880)
    cy.visit('/')
    cy.wait(3000)
    // cy.screenshot()
  })
})
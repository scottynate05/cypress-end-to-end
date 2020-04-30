// describe === context, it === specify, beforeEach

/*global cy */
/// <reference types="Cypress" />

describe("Test our form inputs", function () {
    this.beforeEach(function() {
        cy.visit("http://localhost:3000/")
    })
    it("adds text to inputs", function () {
        // cy.visit("http://localhost:3000/")
        // cy.get('[for="name"] > input') wrong!
        cy.get('[data-cy="name"]')
            .type("Nate")
            .should("have.value", "Nate")
        cy.get('[data-cy="email"]')
            .type("email@email.com")
            .should("have.value", "email@email.com")
        cy.get('textarea')
            .type("I want to help")
            .should("have.value", "I want to help")
        cy.get('#positions')
            .select("Yard Work")
            .should("have.value", "Yard Work")
        cy.get('[type="checkbox"]')
            .check()
            .should("be.checked")
        cy.contains('Submit')
            .click()
    })
    // it("secont it test", function () {
    //     // test here
    // })
})
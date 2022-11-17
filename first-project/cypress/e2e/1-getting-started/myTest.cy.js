/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("example to-do app", () => {
  it("first test", () => {
    cy.visit("https://www.uzhnu.edu.ua/");
    cy.url().should("include", "/www.uzhnu.edu.ua/");
  });
  it("second test", () => {
    cy.visit("https://www.uzhnu.edu.ua/");
    cy.get("#q").type("Математика{enter}");
    cy.url({ timeout: 10000 }).should("include", "search");
  });

  it.only("aaaa", () => {
    cy.request("https://dog.ceo/api/breeds/image/random").as("dogTest");

    cy.get("@dogTest").should((response) => {
      console.log(response);
      // cy.request("/admin").its("body").should("include", "<h1>Admin</h1>");
      // expect(response.body).to.have.length(500)
      expect(response.body).to.have.property("message");
      expect(response.body).to.have.property("status");
    });
  });
});

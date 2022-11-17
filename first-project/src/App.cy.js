import App from "./App.vue";

describe("<App />", () => {
  it("renders", () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(App);
    cy.contains("Go to About").should("exist");
  });
});

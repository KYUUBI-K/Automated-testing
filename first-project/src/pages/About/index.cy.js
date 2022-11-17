import index from "./index.vue";

describe("<index />", () => {
  it("renders", () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(index);
    cy.contains("ABOUT").should("exist");
  });
});

import index from "./index.vue";

describe("<index />", () => {
  it("renders", () => {
    cy.mount(index);
    cy.contains("Home").should("exist");
  });
});

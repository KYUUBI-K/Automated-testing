import index from "./index.vue";

describe("<index />", () => {
  it("renders", () => {
    cy.mount(index);
    // cy.contains("input[type=text]").type(
    //   "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg"
    // );
  });
});

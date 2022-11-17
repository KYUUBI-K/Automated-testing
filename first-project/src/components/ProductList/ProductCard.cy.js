import ProductCard from "./ProductCard.vue";

describe("<ProductCard />", () => {
  it("renders", () => {
    // see: https://test-utils.vuejs.org/guide/

    // Arrange
    const onEditProductSpy = cy.spy().as("onEditProductSpy");
    const onDeleteItemSpy = cy.spy().as("onDeleteItemSpy");
    const onOnAddToCartSpy = cy.spy().as("onOnAddToCartSpy");
    const onOpenProductDetailSpy = cy.spy().as("onOpenProductDetailSpy");

    cy.mount(ProductCard, {
      props: {
        title: "Vasa",
        imgSrc:
          "https://content1.rozetka.com.ua/goods/images/preview/253281530.jpg",
        price: 5600,
        sales: true,
        onEditProduct: onEditProductSpy,
        onDeleteItem: onDeleteItemSpy,
        onOnAddToCart: onOnAddToCartSpy,
        onOpenProductDetail: onOpenProductDetailSpy,
      },
    });
    cy.contains("Edit").should("exist");
    cy.contains("Edit").click();
    cy.contains("Delete").should("exist");
    cy.contains("Delete").click();
    cy.contains("+").should("exist");
    cy.contains("+").click();
    cy.contains("getDetails").should("exist");
    cy.contains("getDetails").click();

    // Assert
    // cy.get("@onEditProductSpy").should("have.been.calledWith", 1);
    cy.get("@onEditProductSpy").should("have.been.calledOnce");
    cy.get("@onDeleteItemSpy").should("have.been.calledOnce");
    cy.get("@onOnAddToCartSpy").should("have.been.calledOnce");
    cy.get("@onOpenProductDetailSpy").should("have.been.calledOnce");
  });
  it("renders without props", () => {
    // see: https://test-utils.vuejs.org/guide/

    // Arrange
    cy.mount(ProductCard, {
      props: {
        title: "",
        imgSrc: "",
        price: "",
        sales: "",
      },
    });
  });
});

describe("Home Page", () => {
  it("should render country list and show additional country info on click", () => {
    cy.visit("/");

    // Check if the country list is rendered
    cy.get("[data-testid=country-list]").should("exist");

    // Check if the country buttons are rendered
    cy.get("[data-testid^=country-button-]").should("have.length", 2);

    // Simulate a click on a country button
    cy.get("[data-testid=country-button-US]").click();

    // Wait for additional country info to load
    cy.contains("Capital: Washington D.C.").should("exist");
    cy.contains("Currency: USD").should("exist");
    cy.contains("Phone: +1").should("exist");
  });
});

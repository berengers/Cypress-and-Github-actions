describe("Create account", () => {
  it("Test link react", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-e2e="link-learn-react"]').click();
  });
});

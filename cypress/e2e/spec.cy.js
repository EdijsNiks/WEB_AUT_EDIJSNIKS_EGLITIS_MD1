import SelectablePage from "../pageObject/Selectable.page";

describe("DemoQA spec", () => {
  context("Selectable scenarios", () => {
    beforeEach(() => {
      cy.visit("/selectable");
    });

    it.only("Selectable case", () => {
    //Clicks the grid section
     SelectablePage.clickGrid.click();
     //Click 2,4,6,8
     SelectablePage.grid2.click()
     SelectablePage.grid4.click()
     SelectablePage.grid6.click()
     SelectablePage.grid8.click()
     //Validate that 2,4,6,8 is highlighted
     SelectablePage.grid2.should("have.class", "active")
     SelectablePage.grid4.should("have.class", "active")
     SelectablePage.grid6.should("have.class", "active")
     SelectablePage.grid8.should("have.class", "active")
     //Validate that 1,3,5,7,9 is not highlighted
     SelectablePage.grid1.should("not.have.class", "active")
     SelectablePage.grid3.should("not.have.class", "active")
     SelectablePage.grid5.should("not.have.class", "active")
     SelectablePage.grid7.should("not.have.class", "active")
     SelectablePage.grid9.should("not.have.class", "active")

    })
  });
});

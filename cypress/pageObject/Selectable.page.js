class SelectablePage{
    static get url(){
        return "/";
    }
    static visit (){
        cy.visit(this.url);
    }
    static get clickGrid(){
        return cy.get("#demo-tab-grid");
    }
    static get grid2(){
        return cy.get(".grid-container > :nth-child(1) > :nth-child(2)");
    }
    static get grid4(){
        return cy.get(".grid-container > :nth-child(2) > :nth-child(1)");
    }
    static get grid6(){
        return cy.get(".grid-container > :nth-child(2) > :nth-child(3)");
    }
    static get grid8(){
        return cy.get(".grid-container > :nth-child(3) > :nth-child(2)");
    }
    static get grid1(){
        return cy.get(".grid-container > :nth-child(1) > :nth-child(1)");
    }
    static get grid3(){
        return cy.get(".grid-container > :nth-child(1) > :nth-child(3)");
    }
    static get grid5(){
        return cy.get(".grid-container > :nth-child(2) > :nth-child(2)");
    }
    static get grid7(){
        return cy.get(".grid-container > :nth-child(3) > :nth-child(1)");
    }
    static get grid9(){
        return cy.get(".grid-container > :nth-child(3) > :nth-child(3)");
    }



}
export default SelectablePage;


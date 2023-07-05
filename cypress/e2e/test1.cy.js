/// reference types = "cypress"/>

///create a function 
// it("Google Search", () =>) //or write a fxn explicitly as below
it("Google Search", function(){
    cy.visit("https://google.com")
    // cy.get('#APjFqb').type("nigeria's landmass and pop")
    // cy.contains('Google Search').click()

    // OR, just use the single line below w/ custom timeout
    cy.get('#APjFqb',{setTimeout:5000}).type("nigeria's landmass and pop{enter}")

    // click the image tab on the resuslt tab
    cy.get('.MUFPAc > :nth-child(3) > a').click()

})


it('Assertions Demo', () => {
    cy.visit('https://example.cypress.io/')
    cy.contains('get').click()
    cy.get('#query-btn')
        .should('contain', 'Button')
        // instead of repeating 'should' commands, we can replace repetitive cmds with 'and'
        .and('have.class', 'query-btn')
        .and('be.visible','query-btn')
        .and('be.enabled','query-btn')
    
        // explicit assertions 
        expect(true).to.be.true

    assert.equal(4,'4', 'EQUAL')
    assert.isAbove(4,4, 'EQUAL')  //...expected to be error

}
)
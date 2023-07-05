
/ <reference types = "cypress"/>
/// <reference types="cypress-downloadfile"/>


it('file uplaod demo', function(){
    cy.visit('https://trytestingthis.netlify.app/')
    // cy.get('#myfile').attachFile('cypress/fixtures/Screen Shot.png')  //attachFile is deprecated
    // Project files are usually stored in the fixtures folders
    cy.get('#myfile').selectFile('cypress/fixtures/Screen Shot.png')

})


it('File download Demo', function(){
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg',
    'mydownloads','example.jpg')
})

// Drag and Drop files unto browser
it('Drag & Drop Demo', function(){
    cy.visit('https://classic.wordclouds.com/')
    // [Optional] refresh the cavass screen before dragging and dropiing
    // cy.get('#btn-reseed')
    // cy.get('.btn-toolbar > :nth-child(1) > :nth-child(2) > .btn').click()
    // cy.get('.modal-footer > .btn-primary').click()
    cy.get('#canvas').selectFile('cypress/fixtures/job skills.txt', {
        action: 'drag-drop'
    })
})
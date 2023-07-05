/*
    - Here we want to use cypress tp read and generate files 
    - Create a test and add command
*/

it('read files using fixture', function(){
    // the '.then' function assignes the output of the previous command it is appended to into the new variable it holds
    cy.fixture('example.json').then((file) =>
    {
        // we can then read out the contents of the new variable  ...even as indices 
        cy.log(file.email)
        cy.log(file.name)
        cy.log(file.body)
    })
})

// we can equally read files using the 'readFile' function
it('read with readFile()', function(){
    cy.readFile('cypress/fixtures/example.json').then((data)=>{
        cy.log(data.name)
        cy.log(data.body)
    })
})

// Write a new file
it('write a file demo usinf readFile()', function(){
    cy.writeFile('.sample.txt', 'Hello, I am raghav \n\n')
    // flag: a+ means append, so the next command doesnt override the previous
    cy.writeFile('sample.txt', 'I am writing cypress', {flag: 'a+'})
})



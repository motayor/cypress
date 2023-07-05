
/*
 ==================== Grouping Tests ==================
 --In this test, we want to create groups for tests that do different things. 
    --Use 'describe()' to create a funcction that operateionalise a 'group' at once. All tests within a group typically run at once. 
    -- With grouped test, we can use any of the additional methods. 
1. '.only'   e.g.,  it.only('Login test 1', function(){  
2. '.skip'   e.g.,  it.skip('Login test 1', function(){
     Use 'it.only/skip' to specify which test to select/skip
3. 'beforeEach'
         Within 'beforeEach' ... means "Run it before" each test in that 'describe' group
        Outside 'beforeEach' ... means "Run it before" each test in that spec file 
        in index.js or e2e.js files ...which runs before all the 'described' or 'it' blocks.
*/

import { LoginPage } from "./pages/login_pages"

const loginPage = new LoginPage()

describe('All login Tests', function()
{  
    // beforeEach(function() 
    // {
    //     cy.visit('https://raceroster.com/signin')
    // })

    it('Login test 1', function()
    {
        // cy.visit('https://raceroster.com/signin')   // instead of repeating this url before eac test, use 'beforeEach'
        loginPage.enterUsername('dukeandaces@gmail.com')
        loginPage.enterPassword('5#cpxDZF!DLh#A2z%*')
        loginPage.clickLogin()
        cy.get('.dashboard-navbar__user-dropdown-toggle').click()
        // cy.get('.dashboard-navbar__user-dropdown-menu > :nth-child(1) > .dropdown-item').click()
        // cy.contains('dashboard').click()
        cy.log("Back to home page...")
    })

    it('Login Test 2', function()
    {
        // cy.visit('https://raceroster.com/signin')
        loginPage.enterUsername('dukeandaces@gmail.com')
        loginPage.enterPassword('5#cLh#A2z%*')  //use wrong credentials in 2nd group
        loginPage.clickLogin()
    })

})

 
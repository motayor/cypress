//pom is a design principle that recommends that we keep the 'objects' and 'methods' separated from the test script
// this is a efficient way to guaranteee dynamism in methods/objects nature and any dependency changes from third parties

// import class propertiesl objects and methods from the LoginPage.js POM 
import { LoginPage } from "./pages/login_pages" 

const loginPage = new LoginPage()
 it('POM DEMO', function()
 {
    cy.visit('https://raceroster.com/signin')
    loginPage.enterUsername('dukeandaces@gmail.com')
    loginPage.enterPassword('5#cpxDZF!DLh#A2z%*')
    loginPage.clickLogin()
   })


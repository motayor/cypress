
// this is our POM for log in 

export class LoginPage{


    enterUsername(username){
        cy.get('#sign-in-email').type(username)
        }

    enterPassword(pwd){
        cy.get('#sign-in-password').type(pwd)
    }

    clickLogin(){
        cy.get('.btn-primary').click()

    }

}
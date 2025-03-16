// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})
//=======================================================================================

//1.Login.cy.js
Cypress.Commands.add('Login', (fn, ln, em, msg) => {

    cy.get('[name="first_name"]').type(fn)
    cy.get('[name="last_name"]').type(ln)
    cy.get('[name="email"]').type(em)
    cy.get('[name="message"]').type(msg)
    cy.get('[type="submit"]').click()
})


//3.CustomCmd.cy.js
Cypress.Commands.add('OHRMlogin', (usr, pwd) => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type(usr)
    cy.get('[name="password"]').type(pwd)
    cy.get('.orangehrm-login-button').click()
})


//4.HooksContactUs.cy.js
Cypress.Commands.add('ContactUs', (fn, ln, em, msg) => {

    cy.get('[name="first_name"]').type(fn)
    cy.get('[name="last_name"]').type(ln)
    cy.get('[name="email"]').type(em)
    cy.get('[name="message"]').type(msg)
})
//-----------------------------------------------------------------------------
//15.Iframe.cy.js
Cypress.Commands.add('getiframeBody', (frameId) => {
    return cy.get(frameId).its('0.contentDocument.body').then(cy.wrap)
})

//-----------------------------------------------------------------------------------

//21.cySession.cy.js
Cypress.Commands.add('OhrmLoginBySession', (un, pass) => {

    cy.session([un, pass], () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.visit('web/index.php/auth/login') //baseurl
        cy.get('[name="username"]').type(un)
        cy.get('[name="password"]').type(pass)
        cy.get('.orangehrm-login-button').click()
    })
})

//-------------------------------------------------------------------------

require('cypress-downloadfile/lib/downloadFileCommand') //for file download

//-------------------------------------------------------------
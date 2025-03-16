///<reference types="cypress"/>


describe('Find Brow in which test case is running', function () {


    it('find browser', function () {

        cy.visit('https://www.webdriveruniversity.com/Actions/index.html')
        cy.log(`Running in ${Cypress.browser.name}`)
        cy.log(`Running in ${Cypress.browser.family}`)
        cy.log(`Running in ${Cypress.browser.version}`)
        cy.log(`Runnig in ${Cypress.browser.majorVersion}`)
    });

});

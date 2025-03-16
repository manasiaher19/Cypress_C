///<reference types="cypress"/>

import data from "../../fixtures/example.json"
describe('Contact us with fixture file', function () {

    it(`contact us Form - 1`, () => {
        data.forEach(function (info) {

            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(info.fname)
            cy.get('[name="last_name"]').type(info.lname)
            cy.get('[name="email"]').type(info.email)
            cy.get('[name="message"]').type(info.comment)
            cy.get('[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })

    })
    //=====================================================================
    data.forEach((info, index) => {

        it.only(`contact us Form ${index + 1}`, () => {
            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(info.fname)
            cy.get('[name="last_name"]').type(info.lname)
            cy.get('[name="email"]').type(info.email)
            cy.get('[name="message"]').type(info.comment)
            cy.get('[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')

        })
    })

});

///<reference types ="cypress"/>

import data from "../../fixtures/example2.json"
describe('Handling Contactus form with object of objects data', function () {

    Object.keys(data).forEach(function (userkey) {

        const user = data[userkey]

        it(`contact us form for ${user.fname}`, () => {

            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(user.fname)
            cy.get('[name="last_name"]').type(user.lname)
            cy.get('[name="email"]').type(user.email)
            cy.get('[name="message"]').type(user.comment)
            cy.get('[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    })

});

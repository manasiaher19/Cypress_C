///<reference types ="cypress"/>

import userData from "../../fixtures/Sign-upData.json"
describe('Handling Sign-up form data with fixture file', function () {

    Object.keys(userData).forEach(function (userkey) {
        const user = userData[userkey]

        it(`Sign-up Form for ${user.name}`, () => {
            cy.visit('https://automationexercise.com/login')
            cy.get('[data-qa="signup-name"]').type(user.name)
            cy.get('[data-qa="signup-email"]').type(user.email)
            cy.get('[data-qa="signup-button"]').click()
            cy.get('[class="title text-center"]').should('contain', 'Enter Account Information')
        })
    })

});

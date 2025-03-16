///<reference types = "cypress"/>

let data = {
    fname: "Manasi",
    lname: "Aher",
    email: "manasi@gmail.com",
    comment: "Learning Fixture Concept!"
}

describe("Handling Contact us with fixture data", () => {

    it('Contact us form with obj', () => {

        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(data.fname)
        cy.get('[name="last_name"]').type(data.lname)
        cy.get('[name="email"]').type(data.email)
        cy.get('[name="message"]').type(data.comment)
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it('Contact us form with example.json', () => {
        cy.fixture('example').then(function (data) {

            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(data.fname)
            cy.get('[name="last_name"]').type(data.lname)
            cy.get('[name="email"]').type(data.email)
            cy.get('[name="message"]').type(data.comment)
            cy.get('[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })

    })

})
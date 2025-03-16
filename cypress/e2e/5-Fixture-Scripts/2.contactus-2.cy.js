///<reference types = "cypress"/>

let data = undefined

describe('Contact us with fixture file arr of obj run single test case', function () {

    before('fixture file', () => {

        cy.fixture('example').then((data) => {
            this.data = data
        })
    })

    it('contact us form with array of object-1', () => {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(this.data[0].fname)
        cy.get('[name="last_name"]').type(this.data[0].lname)
        cy.get('[name="email"]').type(this.data[0].email)
        cy.get('[name="message"]').type(this.data[0].comment)
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })
    it('contact us form with array of object-2', () => {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(this.data[1].fname)
        cy.get('[name="last_name"]').type(this.data[1].lname)
        cy.get('[name="email"]').type(this.data[1].email)
        cy.get('[name="message"]').type(this.data[1].comment)
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })
    it('contact us form with array of object-3', () => {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(this.data[2].fname)
        cy.get('[name="last_name"]').type(this.data[2].lname)
        cy.get('[name="email"]').type(this.data[2].email)
        cy.get('[name="message"]').type(this.data[2].comment)
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })
});


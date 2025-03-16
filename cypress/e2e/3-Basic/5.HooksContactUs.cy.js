///<reference types ="cypress"/>

describe('Contact us Form', () => {


    beforeEach(function () {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
    })

    it('Verify Contact us form with valid data', () => {

        cy.ContactUs('Manasi', 'Aher', 'manasi@email.com', 'Learning')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })

    it('Verify Contact us form with Invalid email', () => {

        cy.ContactUs('Manasi', 'Aher', 'manasiemail.com', 'Learning')
        cy.get('[type="submit"]').click()
        cy.get('body').should('contain', 'Error: Invalid email address')

    })

    it('Verify Contact us form with reset button', () => {

        cy.ContactUs('Manasi', 'Aher', 'manasiemail.com', 'Learning')
        cy.get('[type="reset"]').click()
        cy.get('[name="first_name"]').type(' ')
        cy.get('[name="last_name"]').type(' ')
        cy.get('[name="email"]').type(' ')
        cy.get('[name="message"]').type(' ')
    })

    it.only('Verify Contact us form with empty field', () => {

        cy.ContactUs('Manasi', 'Aher', 'manasiemail.com','')
        cy.get('[type="reset"]').click()

    })
})
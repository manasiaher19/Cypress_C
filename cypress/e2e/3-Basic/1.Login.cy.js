///<reference types ="cypress"/>

describe("Verify Contact Us form", function () {    //testscuit

    it.only("Countact us form with valid credentials", function () {    //testcase

        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")

        cy.get('[name="first_name"]').type('Manasi')
        cy.get('[name="last_name"]').type('Aher')
        cy.get('[name="email"]').type('manasiaher@email.com')
        cy.get('[name="message"]').type('I am Learning Cypress!')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it('Countact us form with Invalid Email id credentials', function () {

        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type('Manasi')
        cy.get('[name="last_name"]').type('Aher')
        cy.get('[name="email"]').type('manasiaher.com')
        cy.get('[name="message"]').type('I am Learning Cypress!')
        cy.get('[type="submit"]').click()
        cy.contains('Error: Invalid email address').should('be.visible')
    })

    it('Verify Countact us form for skip field', function () {

        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type('Manasi')
        cy.get('[name="last_name"]').type('Aher')
        cy.get('[name="email"]').type('manasiaher@gmail.com')
        cy.get('[type="submit"]').click()
        cy.contains('Error: all fields are required').should('be.visible')
    })

    it("Countact us form for Reset btn credentials", function () {

        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type('Manasi')
        cy.get('[name="last_name"]').type('Aher')
        cy.get('[name="email"]').type('manasiaher@email.com')
        cy.get('[name="message"]').type('I am Learning Cypress!')
        cy.get('[type="reset"]').click()
        //Assertion
        cy.get('[name="first_name"]').should('have.text', '')
        cy.get('[name="last_name"]').should('have.text', '')
        cy.get('[name="email"]').should('have.text', '')
        cy.get('[name="message"]').should('have.text', '')

    })

    it('Verify login data with custom command', () => {

        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.Login('Manasi', 'Aher', 'manasi@email.com', 'Learning cypress!')
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

})
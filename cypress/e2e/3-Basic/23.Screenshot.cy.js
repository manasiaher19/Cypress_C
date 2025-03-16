///<reference types = "cypress"/>

describe('Verify Following Files', () => {

    it('Capture screenshots and videos', () => {
        cy.visit('https://automationexercise.com/')
        cy.get('[class="logo pull-left"]').screenshot("AutoExer Logo")
    })

    it.only('Verify Contact Us Page screenshot for Verified data', () => {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Manasi')
        cy.get('[name="last_name"]').type('Aher')
        cy.get('[name="email"]').type('manasiaher@email.com')
        cy.get('[name="message"]').type('Taking Screenshot of this page')
        cy.screenshot('ContactUs Form')
    })
})
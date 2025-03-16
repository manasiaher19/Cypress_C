export default class MyPage {

    Selector = {

        url: 'https://www.webdriveruniversity.com/Contact-Us/contactus.html',
        fn: '[name="first_name"]',
        ln: '[name="last_name"]',
        email: '[name="email"]',
        comment: '[name="message"]',
        submitBtn: '[type="submit"]',
        resetBtn: '[type="reset"]',
        positiveValid: 'h1',
        ValidateMsg: 'Thank You for your Message!',
        positiveValid2: '[name="contactme"]',
        negativeValid: 'body',
        ValidateMsg2: 'Error: Invalid email address',
        ValidateMsg3: 'Error: all fields are required'
    }

    visitUrl() {
        cy.visit(this.Selector.url)
    }

    ContactUsPage(fn, ln, em, msg) {
        cy.get(this.Selector.fn).type(fn)
        cy.get(this.Selector.ln).type(ln)
        cy.get(this.Selector.email).type(em)
        cy.get(this.Selector.comment).type(msg)
    }

    ContactUsPage2(user) {
        cy.get(this.Selector.fn).type(user.fname)
        cy.get(this.Selector.ln).type(user.lname)
        cy.get(this.Selector.email).type(user.email)
        cy.get(this.Selector.comment).type(user.comm)
    }

    ContactUsPage3(Ele) {
        cy.get(this.Selector.fn).type(Ele.fname)
        cy.get(this.Selector.ln).type(Ele.lname)
        cy.get(this.Selector.email).type(Ele.email)
        cy.get(this.Selector.comment).type(Ele.comment)
    }

    Submit() {
        cy.get(this.Selector.submitBtn).click()
    }

    ValidationSubmit() {
        cy.get(this.Selector.positiveValid).should('contain', this.Selector.ValidateMsg)
    }

    ResetBtn() {
        cy.get(this.Selector.resetBtn).click()
    }

    ValidationReset() {
        cy.get(this.Selector.positiveValid2).should('be.visible')
    }

    ValidateInvalidEmail() {
        cy.get(this.Selector.negativeValid).should('contain', this.Selector.ValidateMsg2)
    }

    EmptyField() {
        cy.get(this.Selector.negativeValid).should('contain', this.Selector.ValidateMsg3)
    }
}
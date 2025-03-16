///<reference types="cypress"/>


describe('Javascript Alerts', function () {

    it('Simple Alert', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:alert', function (text) {
            expect(text).to.eq('I am a JS Alert')
            return true
        })
        cy.get('[onclick="jsAlert()"]').click()
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })

    it('Confirm Alert for Ok', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:confirm', function (text) {
            expect(text).to.eq('I am a JS Confirm')
            return true
        })
        cy.get('[onclick="jsConfirm()"]').click()
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })

    it('Confirm Alert for Cancel', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.on('window:confirm', function (text) {
            expect(text).to.eq('I am a JS Confirm')
            return false
        })
        cy.get('[onclick="jsConfirm()"]').click()
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    })

    it('window Prompt Alert with text', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('I am tester')
        })
        cy.get('[onclick="jsPrompt()"]').click()
        cy.get('#result').should('have.text', 'You entered: I am tester')
    })

    it('window Prompt Alert with null', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(null)
        })
        cy.get('[onclick="jsPrompt()"]').click()
        cy.get('#result').should('have.text', 'You entered: null')
    })

    //Automation Testing Practice

    it('Simple Alert', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.on('window:alert', (text) => {
            expect(text).to.eq('I am an alert box!')
            return true
        })
        cy.get('#alertBtn').click()
    })

    it('Confirm Alert', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.on('window:confirm', (text) => {
            expect(text).to.eq('Press a button!')
            // return true
            return false
        })
        cy.get('#confirmBtn').click()
        // cy.get('#demo').should('have.text', 'You pressed OK!')
        cy.get('#demo').should('have.text', 'You pressed Cancel!')
    })

    it('Prompt Alert', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Manasi')
        })
        cy.get('#promptBtn').click()
        cy.get('#demo').should('have.text', 'Hello Manasi! How are you today?')
    })

    //Letcode
    it('Simple Alert letcode', () => {
        cy.visit('https://letcode.in/alert')
        cy.on('window:alert', (text) => {
            expect(text).to.eq('Hey! Welcome to LetCode')
            return true
        })
        cy.get('#accept').click()
    })

    it('Confirm Alert', () => {
        cy.visit('https://letcode.in/alert')
        cy.on('window:confirm', (text) => {
            expect(text).to.eq('Are you happy with LetCode?')
            return true
        })
        cy.get('#confirm').click()
    })

    it('Prompt Alert - ok', () => {
        cy.visit('https://letcode.in/alert')
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Manasi')
        })
        cy.get('#prompt').click()
        cy.get('#myName').contains('Your name is: Manasi')
    })

    it('Prompt Alert -null', () => {
        cy.visit('https://letcode.in/alert')
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('')
        })
        cy.get('#prompt').click()
    })

    //DEMOQA

    it('Click Button to see Simple Alert', () => {

        cy.visit('https://demoqa.com/alerts')
        cy.on('window:alert', function (text) {
            expect(text).to.eq('You clicked a button')
            return true
        })
        cy.get('#alertButton').click()
    })

    it('On button click, alert will appear after 5 seconds-Simple Alert', function () {
        cy.visit('https://demoqa.com/alerts')
        cy.on('window:alert', function (text) {
            expect(text).to.eq('This alert appeared after 5 seconds')
            return true
        })
        cy.get('#timerAlertButton').click()
        cy.wait(5000)

    })

    it('On button click, confirm box will appear', () => {
        cy.visit('https://demoqa.com/alerts')
        cy.on('window:confirm', (text) => {
            expect(text).to.eq('Do you confirm action?')
            // return true
            return false
        })
        cy.get('#confirmButton').click()
        // cy.get('#confirmResult').contains('Ok')
        cy.get('#confirmResult').contains('Cancel')

    })

    it.only('On button click, prompt box will appear', () => {
        cy.visit('https://demoqa.com/alerts')
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Manasi')
            cy.get('#promtButton').click()
            cy.get('#promptResult').contains('Manasi')
        })
    })
});



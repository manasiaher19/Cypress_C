///<reference types = "cypress"/>

describe("Hooks", () => {

    before(function () {
        cy.log("I will exicute first only onces")
    })

    beforeEach(function () {
        cy.log("I will exicute before each test case")
    })

    after(function () {
        cy.log("I will exicute after all test case only onces")
    })

    afterEach(function () {
        cy.log("I will exicute after each test case")
    })

    it('testcase 1', () => {
        cy.log('First Test case')
    })

    it('testcase 2', () => {
        cy.log('second Test case')
    })

    it('testcase 3', () => {
        cy.log('Third Test case')
    })
})
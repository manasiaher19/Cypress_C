///<reference types="cypress"/>

describe('Verifying ShadowDom concept in cypress', () => {

    it('Shadow Dom -way 1', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('[class="info"]', { includeShadowDom: true }).should('have.text', 'Mobiles')
        cy.get('[id="nested_shadow_content"]>div', { includeShadowDom: true }).should('have.text', 'Laptops')
        cy.get('[href="https://www.pavantestingtools.com/"]', { includeShadowDom: true }).type('Manasi')
    })

    it('Shadow Dom - way 2', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('[class="info"]').should('have.text', 'Mobiles')
        cy.get('[id="nested_shadow_content"]>div').should('have.text', 'Laptops')
        cy.get('[href="https://www.pavantestingtools.com/"]').type('Aher')
        //in config.js write - includeShadowDom:true outside e2e
    })

    it('Shadow Dom - way 3', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('[id="shadow_host"]').shadow().find('[class="info"]').should('have.text', 'Mobiles')
        cy.get('[id="shadow_host"]').shadow().find('[id="nested_shadow_content"] > div').should('have.text', 'Laptops')
        cy.get('#shadow_host').shadow().find('[href="https://www.pavantestingtools.com/"]').type('Aher')
    })

    //Practice

    it('Shadow Dom 2', () => {
        cy.visit('https://the-internet.herokuapp.com/shadowdom')
        cy.get('[slot="my-text"]', { includeShadowDom: true }).should('contain', "Let's have some different text!")
        cy.get('[slot="my-text"]>li:nth-child(1)', { includeShadowDom: true }).should('contain', "Let's have some different text!")
        cy.get('[slot="my-text"]>li:nth-child(2)', { includeShadowDom: true }).should('contain', "In a list!")
    })

    it('Shadow Dom 3', () => {
        cy.visit('https://the-internet.herokuapp.com/shadowdom')
        cy.get('[slot="my-text"]').should('contain', "Let's have some different text!")
        cy.get('[slot="my-text"]>li:nth-child(1)').should('contain', "Let's have some different text!")
        cy.get('[slot="my-text"]>li:nth-child(2)').should('contain', "In a list!")
    })

    it.only('Shadow Dom 4', () => {
        cy.visit('https://books-pwakit.appspot.com/')
        cy.get('[id="input"]', { includeShadowDom: true }).type('book')
    })

    it('Shadow Dom 5', () => {
        cy.visit('file:///C:/Users/Dell/Desktop/Cypress_C/cypress/e2e/3-Basic/ShadowDom.html')
        cy.get('[onclick="attachShadowDom()"]').click()
        cy.get('[id="name"]', { includeShadowDom: true }).type('Manasi')
    })
})
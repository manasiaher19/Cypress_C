///<reference types="cypress"/>


describe('Traversal mtd on Flipkart website', function () {

    it('Flipkart', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('[class="_2SmNnR"]').type('iphone {enter}')
        cy.get('[class="KzDlHZ"]').first().should('have.text', 'Apple iPhone 15 (Green, 128 GB)')
        cy.get('[class="KzDlHZ"]:first').should('have.text', 'Apple iPhone 15 (Green, 128 GB)')
        cy.get('[class="KzDlHZ"]').should('have.length', 24)
        cy.get('[class="uu79Xy"]>span').first().should('have.text', 'Add to Compare')
        cy.get('[class="uu79Xy"]>span').first().click()
        cy.get('[class="vYpSTw"]').should('have.text','COMPARE')
    })
});

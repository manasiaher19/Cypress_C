///<reference types ="cypress"/>

describe('verify login page of OHRM with cy.session', function () {

    beforeEach(function () {
        cy.OhrmLoginBySession('Admin', 'admin123')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        // cy.visit('/web/index.php/dashboard/index') //baseUrl
    })

    it('Test case 1', () => {
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard')
    })

    it('TestCase 2', () => {
        cy.get('[class="oxd-brand-banner"]').should('be.visible')
    })

    it('Test case 3', () => {
        cy.get('[class="oxd-input oxd-input--active"]').type('Claim')
        cy.get('.oxd-main-menu-item--name').should('have.text', 'Claim')
    })

    it('Test case 4', () => {
        cy.get('[class="oxd-userdropdown-name"]').click()
        cy.get('ul[class="oxd-dropdown-menu"]').find('li').contains('Logout').click()
    })
})
///<reference types="cypress"/>

describe('Verify OHRM site', function () {

    it.only('Login with valid credentials', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click()
        cy.get('[class="oxd-topbar-header-breadcrumb"]>h6').should('have.text', 'Dashboard')

    })

    it('Login with Invalid credentials', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('Admin123')
        cy.get('[type="submit"]').click()
        cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text', 'Invalid credentials')

    })

    it('Verify Valid data with custom command', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.OHRMlogin('Admin', 'admin123')
        cy.get('[class="oxd-topbar-header-breadcrumb"]>h6').should('have.text', 'Dashboard')

    })

    it('Verify InValid data with custom command', () => {

        // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.OHRMlogin('Admin', 'Admin123')
        cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text', 'Invalid credentials')

    })
});

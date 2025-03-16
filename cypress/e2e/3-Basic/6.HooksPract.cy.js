///<reference types ="cypress"/>

describe('Hooks Practice', () => {

    beforeEach(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    before(function () {
        cy.log('Run only once before test case')
    })

    after(function () {
        // cy.get('[role="menuitem"]').last().click()
        // cy.get('[alt="company-branding"]').should('be.visible')
        cy.log('Run only once after test case')

    })

    afterEach(function () {
        cy.log('Run After each test case')
    })

    it('Test case 1 with valid data', () => {
        cy.OHRMlogin('Admin', 'admin123')
        cy.get('[class="oxd-topbar-header-breadcrumb"]>h6').should('have.text', 'Dashboard')

    })

    it('Test case 2 vith invalid data', () => {
        cy.OHRMlogin('Admin', 'Admin123')
        cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text', 'Invalid credentials')
        cy.get('[class="orangehrm-login-footer-sm"]>a').last().should('be.visible')
        cy.get('.orangehrm-login-forgot-header').should('have.text', 'Forgot your password? ')
        cy.get('.orangehrm-copyright').first().should('contain', 'OrangeHRM')
    })
})
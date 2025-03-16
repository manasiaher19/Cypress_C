/// <reference types="cypress" />

describe('Verify Automation Testing Practice site', () => {

    it('Form Filling Functionality', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#name').type('Manasi')
        cy.get('#email').type('manasi.aher@gmail.com')
        cy.get('#phone').type('3676478494')
        cy.get('#textarea').type('sangamner')
        cy.get('[class="post-title entry-title"]>a').should('have.text', 'GUI Elements')
    })

    it.only('Login OHRM site', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get('[name="password"]').type('admin123')
        cy.get('[type="submit"]').click()
        cy.get('[class="oxd-topbar-header-breadcrumb"]>h6').should('have.text', 'Dashboard')
        cy.get('[class="oxd-main-menu"]>li').should('have.length', 12)
        cy.get('[class="oxd-main-menu"]>li').eq('5').click()
        cy.get('[class="oxd-main-menu"]>li').eq('5').should('have.text', 'My Info')
        cy.get('[class="oxd-topbar-header-breadcrumb"]>h6').should('have.text', 'PIM')
        cy.get('[class="orangehrm-tabs"]>div').should('have.length', 10)
        cy.get('[type="submit"]').last().click()
        cy.get('[class="oxd-userdropdown-link"]').last().click()

    })


    it('test case 3', () => {

        cy.visit('https://letcode.in/letxpath')
        cy.get('p[class="title"]').eq('2').should('have.text', 'UI & Design')
        cy.get('p[class="subtitle"]>li').should('have.length', 4)
        cy.get('p[class="title"]').eq('1').should('have.text', 'Change log')
        cy.get('div[class="content"]>li').eq('1').should('contain','Supports parent ')
    })
})

///<reference types="cypress"/>

describe('Handling Mouse actions with ctpress', () => {

    // beforeEach(function () {
    //     cy.visit('https://www.webdriveruniversity.com/Actions/index.html')
    // })

    it('Drag nd Drop 1st way', () => {
        cy.get('#draggable>p>b').trigger('mousedown', { which: 1 })
        cy.get('#droppable>p>b').trigger('mousemove', { which: 1 }).trigger('mouseup', { force: true })
        cy.get('[style="background-color: rgb(244, 89, 80); height: 100%;"]').should('have.text', 'Dropped!')
    })

    it('Drag nd Drop 2nd way', () => {
        cy.get('#draggable>p>b').trigger('mousedown', { button: 1 })
        cy.get('#droppable>p>b').trigger('mousemove', { button: 1 }).trigger('mouseup', { force: true })
        cy.get('#droppable>p>b').should('have.text', 'Dropped!')
    })

    it('Double Click action', () => {
        cy.get('#double-click').should('not.have.class', 'double')
        cy.get('#double-click').trigger('dblclick', { button: 1 })
        cy.get('#double-click').should('have.class', 'double')
    })

    it('mouse hover action -link 1', () => {
        cy.get('[class="list-alert"]').first().should('not.be.visible')
        // cy.get('[class="dropbtn"]').first().trigger('mouseover')
        cy.get('div[class="dropdown-content"]').first().invoke('show')
        cy.get('[class="list-alert"]').first().should('be.visible').should('have.text', 'Link 1')
    })

    it('mouse hover action -link 2', () => {
        cy.get('[class="list-alert"]').eq(1).should('not.be.visible')
        cy.get('[class="dropdown-content"]').eq(1).invoke('show')
        cy.get('[class="list-alert"]').eq(1).should('have.text', 'Link 1')
    })

    it('mouse hover action -link 2', () => {
        cy.get('[class="list-alert"]').eq(2).should('not.be.visible')
        cy.get('[class="dropdown-content"]').eq(2).invoke('show')
        cy.get('[class="list-alert"]').eq(2).should('have.text', 'Link 1')
        cy.get('[class="list-alert"]').eq(3).should('have.text', 'Link 1')
    })

    it('click nd hold', () => {
        cy.get('#click-box').trigger('mousedown', { which: 1 }).should('have.text', 'Well done! keep holding that click now.....')
        cy.get('#click-box').trigger('mouseup', { which: 1 }).should('have.text', 'Dont release me!!!')
    })

    //flipcart

    it.only('mouseaction on flipcat site', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('ul[class="_3YjYK7"]').invoke('show')
        cy.get('ul[class="_3YjYK7"]').find('li').eq(2).should('have.text', 'Advertise')
    })
})
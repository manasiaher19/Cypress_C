///<reference types ="cypress"/>

describe('Traversal Methods', () => {

    beforeEach(function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
    })

    it('Traversal with first ,last ,eq', () => {

        cy.get('.traversal-drinks-list li').should('have.length', 5)
        cy.get('.traversal-food-list li').first().should('have.text', 'Fruits')
        cy.get('.traversal-food-list li').last().should('have.text', 'Lentils')
        cy.get('.traversal-drinks-list>li:nth-child(3)').should('have.text', 'Milk')
        cy.get('.traversal-drinks-list>li:nth-child(5)').should('have.text', 'Sugar')

    })

    it('Traversal - Siblings', () => {

        cy.get('#veggie').prev().should('have.text', 'Figs')
        cy.get('#fruits').next().should('have.text', 'Apple')
        cy.get('#veggie').prevAll().should('have.length', 6)
        cy.get('#veggie').nextAll().should('have.length', 4)
        cy.get('#veggie').prevUntil('#fruits').should('have.length', 5)
        cy.get('#coffee').nextUntil('#fruits').should('have.length', 4)
    })

    it('Find', () => {
        cy.get('#form-textfield').find('[name="firstname"]').type('Manasi')
        cy.get('#form-textfield').find('[name="lastname"]').type('Aher')
        cy.get('#form-textfield').find('[rows="10"]').type('Cypress')
    })

    it('Contains', () => {
        cy.get('.traversal-buttons').contains('Link').click()
        cy.contains('WebdriverUniversity.com (Data Tables)').click()
    })

    it('parent,parents,parentsuntil', () => {

        cy.get('#coffee').parent().should('have.attr', "class", "traversal-drinks-list")
        cy.get('#coffee').parents().should('have.length', 6)
        cy.get('#coffee').parents().should('match', '[class="col-sm-12"]')
        cy.get('#coffee').parents().should('match', '[class="container"]')
        cy.get('#coffee').parentsUntil('[class="container"]')
    })

    it('Children,filter,not', () => {
        cy.get('.traversal-drinks-list').children().should('have.length', 5)
        cy.get('.traversal-food-list').children().should('have.length', 11)

        //filter
        cy.get('.traversal-button-states').children().filter('.disabled').should('have.text', 'Warning')

        //not
        cy.get('.traversal-button-states').children().not('.disabled').should('have.length', 3)
        cy.get('.traversal-button-states').children().not('.disabled').first().should('have.text', 'Danger')
        cy.get('.traversal-button-states').children().not('.disabled').eq(1).should('have.text', 'Info')
        cy.get('.traversal-button-states').children().not('.disabled').last().should('have.text', 'Alert')

    })

    it.only('Closet', () => {

        cy.get('[name="firstname"]').closest('div').should('have.attr', "id", "thumbnail-1")
        cy.get('.badge-text').first().closest('div').should('have.attr',"class","thumbnail")
        
    })


})
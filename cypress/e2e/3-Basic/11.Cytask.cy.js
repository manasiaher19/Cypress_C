///<reference types="cypress"/>

describe('Verify cy.task', () => {

    it('task1', () => {
        cy.task('mytask1')

        cy.task('mytask2', 'manasi')

        cy.task('addition', { a: 5, b: 5 }).then((res) => {
            cy.log(res)
        })
    })
})
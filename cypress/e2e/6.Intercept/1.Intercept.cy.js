///<reference types = "cypress"/>

import BodyData from "../../fixtures/InterceptBody.json"
describe('Handling Intercept concept with Cypress', function () {

    it('Test Case 1 Get Comment', () => {

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.intercept({
            url: 'https://jsonplaceholder.cypress.io/comments/1',
            method: 'GET'
        }).as('GetComment')
        cy.contains('Get Comment').click()
        cy.wait('@GetComment').then(function (res) {
            cy.log(res)
            expect(res.response.body.email).to.eq('Eliseo@gardner.biz')
            cy.log(res.response.body.body)
            cy.get('.network-comment').should('contain', res.response.body.body)
        })
        cy.get('.network-comment').should('contain', 'laudantium enim quasi est')
    })

    it('Test Case 1 Get Comment with body change', () => {

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.intercept({
            url: 'https://jsonplaceholder.cypress.io/comments/1',
            method: 'GET'
        },
            {
                body: {
                    "postId": 1,
                    "id": 10,
                    "name": "manasi aher",
                    "email": "manasi@gmail.com",
                    "body": "Learning Intercept!"
                }
            }).as('GetComment')
        cy.contains('Get Comment').click()
        cy.wait('@GetComment').then(function (res) {
            cy.log(res)
            expect(res.response.body.email).to.eq('manasi@gmail.com')
            cy.log(res.response.body.body)
            cy.get('.network-comment').should('contain', res.response.body.body)
        })
        cy.get('.network-comment').should('contain', 'Learning Intercept!')
    })

    it('Test case For Get Comment body Data from fixture', () => {
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.intercept({
            url: "https://jsonplaceholder.cypress.io/comments/1",
            method: "GET"
        },
            {
                body: BodyData
            }
        ).as('GetComm')
        cy.contains('Get Comment').click()
        cy.wait('@GetComm').then((resp) => {
            cy.log(resp)
            cy.log(resp.response.body.body)
            cy.get('.network-comment').should('contain', resp.response.body.body)
        })
        cy.get('.network-comment').should('contain', 'Body data from fixture')
    })

    it.only('Post Comment', () => {
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.intercept({
            url: "https://jsonplaceholder.cypress.io/comments",
            method: "POST"
        }).as('PostComment')
        cy.contains('Post Comment').click()
        cy.wait('@PostComment').then((res) => {
            cy.log(res)
            expect(res.response.statusCode).to.eq(201)
        })
        cy.get('[class="network-post-comment"]').should('contain', 'POST')
        
    })
});


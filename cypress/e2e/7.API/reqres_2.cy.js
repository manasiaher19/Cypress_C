///<reference types = "cypress"/>

import data from "../../fixtures/APIData/reqresData.json"
import data2 from "../../fixtures/APIData/reqresData.json"

describe('Verify Create User with method POST', function () {

    it.skip('create users', () => {

        cy.request({
            url: 'https://reqres.in/api/users',
            method: 'POST',
            body: data
        }).then((response) => {
            cy.log(response)
            expect(response.body[1].job).to.eq('Tester')
        })
    })

    data2.forEach(function (el, index) {
        it(`Create user using loop ${el.name}`, () => {
            cy.request({
                url: 'https://reqres.in/api/users',
                method: 'POST',
                body: el
            }).then((response) => {
                cy.log(response)
                expect(response.status).to.eq(201)
                expect(response.body.name).to.eq(el.name)
            })
        })
    })
    
});


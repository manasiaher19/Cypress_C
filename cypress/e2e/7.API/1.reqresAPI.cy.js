///<reference types = "cypress"/>

describe('Verifying Reqres API request', () => {

    it('List of Users - GET', () => {

        cy.request({
            url: 'https://reqres.in/api/users?page=2',
            method: 'GET'
        }).then(function (res) {
            cy.log(res)
            cy.log(res.body.data[1])
            expect(res.status).to.eq(200)
            expect(res.statusText).to.eq('OK')
        })
    })

    it(' Single Users - GET', () => {

        cy.request({
            url: 'https://reqres.in/api/users/2',
            method: 'GET'
        }).then(function (res) {
            cy.log(res)
            cy.log(res.body.data.first_name)
            expect(res.body.data.first_name).to.eq('Janet')
            expect(res.status).to.eq(200)
            expect(res.statusText).to.eq('OK')
        })
    })

    it('Create User - mtd POST', () => {
        let Data = {
            "name": "Mayuri",
            "job": "Developer"
        }
        cy.request({
            url: 'https://reqres.in/api/users',
            method: 'POST',
            body: Data
            // {
            //     "name": "manasi",
            //     "job": "Tester"
            // }
        }).then((response) => {
            cy.log(response)
            expect(response.status).to.eq(201)
        })
    })
})
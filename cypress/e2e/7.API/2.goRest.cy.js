///<reference types = "cypress"/>


describe('Verifying Gorest API', function () {

    it('Gorest API - Create Id - Update - Delete', () => {
        const token = '2822c5c64c8a2f3e8fb48aea9ac57eb183a492b19364ac7088ec89234df84f74'
        let userID = undefined
        cy.request({
            url: 'https://gorest.co.in/public/v2/users',
            method: 'POST',
            body: {
                "name": "Manasi",
                "gender": "Female",
                "email": `manasii@${Math.floor(Math.random() * 10000)}gmail.com`,
                "status": "active"
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((resp) => {
                cy.log(resp)
                expect(resp.body.name).to.eq('Manasi')
                expect(resp.body).to.have.keys("id", "name", "email", "gender", "status")
                cy.log(resp.body.id)
                userID = resp.body.id


            })//updateUser
            .then(() => {
                cy.request({
                    url: `https://gorest.co.in/public/v2/users/${userID}`,
                    method: 'PUT',
                    body: {
                        "name": "Nikhil",
                        "email": `Nikhil@${Math.floor(Math.random() * 10000)}gmail.com`,
                        "status": "active"
                    },
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                    .then((res) => {
                        cy.log(res)
                        // expect(res.body.name).to.eq('Nikhil')
                        // expect(res.status).to.eq(200)
                    })
                    //Delete User
                    .then(() => {
                        cy.request({
                            url: `https://gorest.co.in/public/v2/users/${userID}`,
                            method: 'DELETE',
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        }).then((resDelete) => {
                            cy.log(resDelete)
                            expect(resDelete.status).to.eq(204)
                        })
                    })
            })
    })
});

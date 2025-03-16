///<reference types = "cypress"/>

import PostData from "../../fixtures/APIData/goRestPost"
import PutData from "../../fixtures/APIData/goRestPut"

describe('Verifying Gorest API', function () {

    PostData.forEach((ele, index) => {
        it(`Gorest API with fixture data e2e testing ${ele.name}`, function () {
            const token = '2822c5c64c8a2f3e8fb48aea9ac57eb183a492b19364ac7088ec89234df84f74'
            cy.request({
                url: 'https://gorest.co.in/public/v2/users',
                method: 'POST',
                body: ele,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((resPost) => {
                // cy.log(resPost)
                expect(resPost.body.name).to.eq(ele.name)
                expect(resPost.status).to.eq(201)
                return resPost.body.id
            })
                //update-PUT
                .then(function (userID) {
                    cy.request({
                        url: `https://gorest.co.in/public/v2/users/${userID}`,
                        method: 'PUT',
                        body: PutData[index],
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }).then((resPut) => {
                        cy.log(resPut)
                    })
                })
        });
    })


});

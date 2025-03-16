///<reference types="cypress"/>

describe('Verify Table with cypress', () => {

    it('Table 1', () => {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        let sum = 0
        cy.get('#t01').find('tr').not(':first').each((row) => {
            cy.log(row.find('td').last().text())
            sum = sum + Number(row.find('td').last().text())
        }).then(() => {
            cy.log(sum)
            expect(sum).to.eq(159)
        })
    })

    it('Table 2', () => {
        let sum = 0
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t02').find('tr').not(':first').each((row) => {
            cy.log(row.find('td').last().text())
            sum += Number(row.find('td').last().text())
        }).then(() => {
            cy.log(sum)
            expect(sum).to.eq(163)
        })
    })

    it('Table 3', () => {
        cy.visit('https://www.letskodeit.com/practice')
        let sum = 0
        cy.get('#product').find('tr').not(':first').each((row) => {
            cy.log(row.find('td').last().text())
            sum = sum + Number(row.find('td').last().text())

        }).then(() => {
            cy.log(`Total Price is ${sum}`)
            expect(sum).to.eq(90)
        })
    })

    it.only('Table 5', () => {
        cy.visit('https://testautomationpractice.blogspot.com/')
        let Sum = 0
        cy.get('[name="BookTable"]>tbody').find('tr').not(':first').each((row) => {
            cy.log(row.find('td').last().text())
            Sum += Number(row.find('td').last().text())
        }).then(() => {
            cy.log(`Total price =${Sum}`)
            expect(Sum).to.eq(7100)
        })
    })

    // it('Table 6 pagination web table', () => {
    //     cy.visit('https://testautomationpractice.blogspot.com/')
    //     cy.get('#productTable>tbody').find('tr').each((el) => {
    //         cy.log(el.find('td').eq(2).text())
    //         if (el.find('td').eq(2).text() == '$5.99') {
    //             cy.get('#productTable>tbody>tr>td:nth-child(3)').eq(2).click()
    //         }
    //     })
    // })

})
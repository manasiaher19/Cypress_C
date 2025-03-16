///<reference types ="cypress"/>

describe('Handling File upload with cypress', () => {
    it('Single File Upload - 1', () => {
        cy.visit('https://www.webdriveruniversity.com/File-Upload/index.html')
        cy.get('[id="myFile"]').selectFile('C:/Users/Dell/Desktop/Study/Functional testing.docx')
        cy.on('window:alert', (msg) => {
            expect(msg).contain('Your file has now been uploaded!')
            return true
        })
        cy.get('[id="submit-button"]').click()
        cy.url().should('contain', 'Functional+testing.docx')
    })
})

it('Single file upload - 2', () => {
    cy.visit('https://www.webdriveruniversity.com/File-Upload/index.html')
    cy.get('[id="myFile"]').selectFile('cypress/e2e/4-File-Upload/Functional testing.docx')
    cy.on('window:alert', (msg) => {
        expect(msg).contain('Your file has now been uploaded!')
        return true
    })
    cy.get('[id="submit-button"]').click()
    cy.url().should('contain', 'Functional+testing.docx')
})

it('Upload Multiple File', () => {
    cy.visit('https://www.zoho.com/in/books/accounting-software-demo/#/salesorders/new')
    let p1 = "cypress/e2e/4-File-Upload/Functional testing.docx"
    let p2 = "cypress/e2e/4-File-Upload/Playwright With JavaScript.docx"
    cy.get('[id="ember336"]').selectFile([p1, p2])
    cy.get('[id="ember354"]').should('contain', '2')
})

it('Upload Single File', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get('#singleFileInput').selectFile('cypress/e2e/4-File-Upload/Functional testing.docx')
    cy.get('[type="submit"]').first().click()
    cy.get('[id="singleFileStatus"]').should('contain', 'Single file selected:')
})

it.only('Upload Multi File', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')
    let path1 = "cypress/e2e/4-File-Upload/Functional testing.docx"
    let path2 = "cypress/e2e/4-File-Upload/Playwright With JavaScript.docx"
    cy.get('[id="multipleFilesInput"]').selectFile([path1, path2])
    cy.get('[type="submit"]').eq(1).click()
    cy.get('p[id="multipleFilesStatus"]').should('contain', 'Multiple files selected: ')
})
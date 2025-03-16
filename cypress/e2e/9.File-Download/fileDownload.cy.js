///<reference types="cypress"/>

describe('Verify File Download options', () => {

    it('File Deownload - 1', () => {

        cy.visit('http://autopract.com/selenium/download.html')
        cy.get('#download').click()
        cy.readFile('MyDownloads/sample2.csv.crdownload', { timeout: 6000 }).should('contain', 'Eldon Base for stackable storage')
    })

    it.only('File Download-2', () => {
        //https://github.com/Xvier/cypress-downloadfile
        //install modul - npm install cypress-downloadfile
        cy.downloadFile('http://autopract.com/selenium/download.html', 'MyDownloads', 'sample2.csv')

    })

    //the internet site
    it('File download-3', () => {
        cy.visit('https://the-internet.herokuapp.com/download')
        cy.contains('fileupload.txt').click()
        cy.readFile('MyDownloads/fileupload.txt', { timeout: 6000 }).should('contain', 'Hi Team,')
    })

})

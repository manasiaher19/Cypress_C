///<reference types="cypress"/>


describe('Verify File down and how to verify downloads', function () {

    it('File download -1', () => {
        //https://github.com/elaichenkov/cy-verify-downloads 
        // install - npm i -D cy-verify-downloads -- to verify downloads

        cy.downloadFile('https://demoqa.com/upload-download', 'MyDownloads', 'sampleFile.jpeg')
        cy.verifyDownload('sampleFile.jpeg')
        cy.verifyDownload('.jpeg', { contains: true })
    })

    it.only('File download-2', () => {

        cy.downloadFile('https://the-internet.herokuapp.com/download', 'MyDownloads', 'cartoon-animation.gif')
        cy.verifyDownload('cartoon-animation.gif')
        // cy.verifyDownload('.gif', { contains: true })

    })
});

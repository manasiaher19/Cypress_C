///<reference types="cypress"/>

describe('Verify Iframe in cypress', function () {

    it('verify iframe with jquery mtd', () => {

        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')

        cy.get('#frame').then(function ($frame) {
            cy.log($frame)
            let iframeBody = $frame.contents().find('body')
            cy.wrap(iframeBody).as('iframe')
            cy.get('@iframe').find('[href="products.html"]').contains('Our Products')
        })
        // cy.get('#frame').then(function ($frame) {
        //     cy.log($frame)
        //     let iframeBody = $frame.contents().find('body')
        //     cy.wrap(iframeBody).as('iframe')
        //     cy.get('@iframe').find('[href="index.html"]').contains('Home')
        // })
    })

    it('verify iframe with js mtd', () => {
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function (iframe) {
            cy.log(iframe)
            let Iframebody = iframe[0].contentDocument.body
            cy.wrap(Iframebody).as('Iframe')
            cy.get('@Iframe').find('[href="../Contact-Us/contactus.html"]').contains('Contact Us')

        })
    })

    it('Iframe Way -3', () => {
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
        let IFrameBody = cy.get('#frame').its('0.contentDocument.body').then(cy.wrap)
        IFrameBody.find('[href="../Contact-Us/contactus.html"]').contains('Contact Us')
    })

    //support - command.js
    it.only('Iframe way-4', () => {
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
        cy.getiframeBody('#frame').find('[href="../Contact-Us/contactus.html"]').contains('Contact Us')
    })

})
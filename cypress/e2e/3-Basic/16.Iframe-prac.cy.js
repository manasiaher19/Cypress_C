///<reference types="cypress"/>


describe('Verifying Iframe', function () {

    it('Iframe 1', () => {
        cy.visit('https://letcode.in/frame')
        cy.get('#firstFr').then(function ($frame) {
            cy.log($frame)
            let Ifbody = $frame.contents().find('body')
            cy.wrap(Ifbody).as('iframe')
            cy.get('@iframe').find('[name="fname"]').type('Manasi')
            cy.get('@iframe').find('[name="lname"]').type('Aher')
            cy.get('@iframe').find('[class="title has-text-info"]').should('contain', 'You have entered Manasi Aher')
        })
    })

    it('Iframe 2', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.get('[type="button"]>div>svg').last().click()
        cy.get('#mce_0_ifr').then(function (iframe) {
            cy.log(iframe)
            let iframeBody = iframe[0].contentDocument.body
            cy.wrap(iframeBody).as('Iframe')
            cy.get('@Iframe').find('p').first().contains('Your content goes here.')
        })
    })

    it('iframe 2-2nd way', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('[type="button"]>div>svg').last().click()
        let IfBody = cy.get('#mce_0_ifr').its('0.contentDocument.body').then(cy.wrap)
        IfBody.find('p').first().contains('Your content goes here.')
    })

    it('iframe 2-3rd way by command js', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('[type="button"]>div>svg').last().click()
        cy.getiframeBody('#mce_0_ifr').find('p').first().contains('Your content goes here.')
    })

    it('Iframe 3', () => {
        cy.visit('https://demoqa.com/frames')
        cy.get('#frame1').then(function ($frame) {
            cy.log($frame)
            let IFbody = $frame.contents().find('body')
            cy.wrap(IFbody).as('iframe')
            cy.get('@iframe').find('#sampleHeading').first().contains('This is a sample page')
        })
    })

    it.only('Iframe 4', () => {
        cy.visit('https://demoqa.com/frames')
        let IFrameBody = cy.get('#frame2').its('0.contentDocument.body').then(cy.wrap)
        IFrameBody.find('#sampleHeading').last().contains('This is a sample page')
    })

});

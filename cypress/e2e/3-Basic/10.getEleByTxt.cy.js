///<reference types="cypress"/>


describe('Verify Text of Element', function () {

    it('To get txt of element- method 1', () => {
        cy.visit('https://www.google.co.in/')
        cy.get('[class="uU7dJb"]').invoke('text').then(function (txt) {
            cy.log(txt)
        })
        cy.get('[class="ayzqOc pHiOh"]').invoke('text').then((text) => {
            cy.log(text)
        })
    })

    it.only('To get txt of element- method 2', () => {

        cy.visit('https://www.webdriveruniversity.com/')
        // cy.get('#contact-us>div>div.caption>h4').then(($txt) => {
        //     cy.log($txt.text())
        // })
        cy.get('#login-portal>div>div>h1').then(($text) => {
            cy.log($text.text())
        })
    })
});

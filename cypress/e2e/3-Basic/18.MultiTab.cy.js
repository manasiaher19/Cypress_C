///<reference types="cypress"/>

describe('Handling MultiTab in cypress', () => {

    it('MultiTab 1st Way', () => {

        cy.visit('https://www.letskodeit.com/practice')
        cy.url().should('contain', '/practice')
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('contain', '/courses')
        cy.get('[class="dynamic-heading margin-bottom-20"]').should('have.text', 'All Courses')
    })

    it('MultiTab 2nd way', () => {
        cy.visit('https://www.letskodeit.com/practice')
        cy.url().should('contain', '/practice')
        cy.get('#opentab').then(function (ele) {
            let url = ele.prop('href')
            cy.visit(url)
            cy.url().should('contain', '/courses')
            cy.get('[class="dynamic-heading margin-bottom-20"]').should('have.text', 'All Courses')
        })
    })

    it('MultiTab on rahulshettyacademy.com', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.url().should('contain', '/AutomationPractice/')
        cy.get('#opentab').first().invoke('removeAttr', 'target').click()
        cy.url().should('contain', 'qaclickacademy')
    })

    it('MultiTab way 2nd on rahulshettyacademy.com', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').first().then((ele) => {
            let url = ele.prop('href')
            cy.visit(url)
            cy.url().should('contain', 'qaclickacademy')
        })
    })

    //new Window

    it('Handle multi-Window in cypress', () => {
        cy.visit('https://www.letskodeit.com/practice')
        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake(function (url) {
                win.location.href = url
            })
        })
        cy.get('#openwindow').click()
        cy.url().should('contain', '/courses')
    })

    it('Handle multi-Window on rahulshetty site', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.window().then(function (wind) {
            cy.stub(wind, 'open').callsFake(function (url) {
                wind.location.href = url
            })
        })
        cy.get('#openwindow').click()
        cy.url().should('contain', 'qaclickacademy')
    })
})

// cy.window().then(function (win) {
//     cy.window() provides access to the browser's window object.
//     then ensures the test interacts with the window object after it is fully available.
//         cy.stub(win, 'open').callsFake((url) => { win.location.href = url; })
// Stub the window.open method:
//     cy.stub(win, 'open') replaces the default window.open method with a Cypress - controlled stub.
// callsFake modifies its behavior to redirect the current window(win.location.href = url) instead of opening a new tab or window.
// This is done because Cypress does not natively support multi - window or new- tab functionality.
// By redirecting, the test can proceed seamlessly within the same context.

//--------------------------------------------------------------------------------


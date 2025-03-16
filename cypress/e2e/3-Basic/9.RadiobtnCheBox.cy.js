///<reference types="cypress"/>

describe('Verify Radio Btn & check box functionality', () => {

    it('Verify Radio Btn', () => {
        cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        // cy.get('[value="green"]').check()
        cy.get('[value="green"]').click()
        cy.get('[value="green"]').should('be.checked')
        cy.wait(2000)
        cy.get('[value="blue"]').should('not.be.checked')
        cy.get('[value="purple"]').click()
        cy.get('[value="purple"]').should('be.checked')
        cy.wait(2000)
        cy.get('[value="green"]').should('not.be.checked')
        cy.get('[value="yellow"]').check()
    })

    it('Verify CheckBox', () => {
        cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="option-3"]').should('be.checked')
        // cy.get('[value="option-3"]').uncheck().should('not.be.checked')
        cy.get('[value="option-3"]').click().should('not.be.checked')
        cy.get('[value="option-1"]').check().should('be.checked')
        cy.get('[value="option-2"]').check().should('be.checked')
        cy.get('[value="option-3"]').check().should('be.checked')
        cy.wait(2000)
        cy.get('[value="option-1"]').uncheck().should('not.be.checked')
    })

    it('RadioBtn And CheckBox', () => {

        //radioBtn
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('#benzradio').should('not.be.checked')
        cy.get('#benzradio').click().should('be.checked')
        cy.get('#hondaradio').check().should('be.checked')

        //checkBox
        cy.get('#bmwcheck').should('not.be.checked')
        cy.get('#bmwcheck').check().should('be.checked')
        cy.get('#benzcheck').check().should('be.checked')
        cy.get('#hondacheck').click().should('be.checked')
        cy.get('#bmwcheck').uncheck().should('not.be.checked')
    })

    it.only('Amazon',()=>{

        cy.visit('https://www.amazon.in/')
        cy.get('[class="icp-nav-link-inner"]').click()
        cy.get('[value="en_IN"]').should('be.checked')
        cy.get('[value="hi_IN"]').click({force:true}).should('be.checked')
        cy.get('[value="en_IN"]').should('not.be.checked')
    })
})
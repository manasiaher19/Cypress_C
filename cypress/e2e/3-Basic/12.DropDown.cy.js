///<reference types="cypress"/>

describe('Verify Down Down Functionality', () => {

    //2 types of dropdown : Dynamic & static 
    it('Verify Static DropDown', () => {

        cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').select('sql')
        cy.get('#dropdowm-menu-2').select('TestNG')
        cy.get('#dropdowm-menu-3').select('JavaScript')
    })



    it('Verify Dynamic DropDown', () => {
        cy.visit('https://www.webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.get('#myInput').type('ca')
        cy.get('#myInputautocomplete-list>div').each((el) => {
            // cy.log(el.text())
            if (el.text() === 'Carrots') {
                cy.wrap(el).click()
                cy.get('#submit-button').click()
                cy.url().should('contain', 'Carrots')
            }
        })
    })

    it('Verify Dynamic DropDown 2', () => {

        cy.visit('https://www.webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.get('#myInput').type('M')
        cy.get('#myInputautocomplete-list>div').each(function (el) {
            cy.log(el.text())
            if (el.text() == 'Milk') {
                cy.wrap(el).click()
                cy.get('#submit-button').click()
                cy.url().should('contain', 'Milk')
            }
        })
    })

    it('Verify Dynamic DropDown 3', () => {

        cy.visit('https://www.primevideo.com/offers/nonprimehomepage/ref=atv_dl_rdr')
        // cy.get('[class="_8ULqYw"]').eq(1)
        // cy.get('#pv-nav-container > div >div.zOWbJm>ul>li:nth-child(1)>div>button>span')
        cy.get('[class="_8ULqYw"]:nth(1)').click()
        cy.get('#pv-search-nav').type('push')
        cy.get('[class="a0VjRs"]>li').each((movi) => {
            // cy.log(movi.text())
            if (movi.text() == 'pushpa the rise hindi') {
                cy.wrap(movi).click()
                cy.contains('Results for "pushpa the rise hindi".').should('be.visible')
                cy.get('[data-testid="card-section"]').click()
            }
        })
    })

    it('Dynamic DropDown 4', () => {

        cy.visit('https://www.redbus.in/')
        cy.get('#src').type('jaipur')
        cy.get('[class="sc-dnqmqq dZhbJF"]>li').each((city) => {
            cy.log(city.text())
            if (city.text() == 'Kishangarh') {
                cy.wrap(city).click()
            }
        })
    })

    it('Dynamic DropDown 5', () => {

        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('phone')
        cy.get('#nav-flyout-iss-anchor>div>div>div>div:nth-child(1)>div').each((ele) => {
            cy.log(ele.text())
            if (ele.text() == 'phone under 20k') {
                cy.wrap(ele).click()
                cy.get('[class="a-truncate-full a-offscreen"]').first()
                    .contains("Redmi Note 14 | Segment's Brightest AMOLED Display")
            }
        })
    })

    it.only('Dynamic DropDown 6', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('[class="_3ETuFY"]').eq(3).click({force:true})
        cy.get('[class="_16rZTH"]>object>a').each((ele) => {
            cy.log(ele.text())
            if (ele.text() == 'Laptop Accessories') {
                cy.wrap(ele).click()
                cy.get('[class="lF7HP0"]').should('have.text', 'IT Accessories')
                cy.get('[class="ZHvV68"]').eq(1).click()
            }
        })
    })
})
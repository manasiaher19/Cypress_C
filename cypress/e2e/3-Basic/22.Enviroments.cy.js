///<reference types="cypress"/>
//dev,SIT,UAT,pre-prod,prod
describe('Handling Different Enviroments in cypress', () => {

    it('Env in cypress', () => {

        cy.visit('https://practice.automationtesting.in/my-account/')
        cy.get('[id="username"]').type('manasi@gmail.com')
        cy.get('[id="password"]').type('Manasi@19')
        cy.get('[value="Login"]').click()

        cy.get('strong').should('have.text', 'manasi')
        let uid = 'manasi@gmail.com'
        let un = uid.split('@') //['manas','gmail.com']
        cy.log(un[0])
        cy.get('strong').should('have.text', un[0])
    })

    it.only('Env in cypress - 2', () => {
        cy.visit('/my-account/')
        cy.get('[id="username"]').type(Cypress.env('uid'))
        cy.get('[id="password"]').type(Cypress.env('pass'))
        cy.get('[value="Login"]').click()
        let uid = Cypress.env('uid')
        let un = uid.split('@')
        cy.get('strong').should('have.text', un[0])
    })
})


// manasi@gmail.com
// Manasi@19

// aher@gmail.com
// manasiAher@19

// firstway using npx cypress open
// npx cypress open --config-file production.config.js
// npx cypress open --config-file stagging.config.js

//second way using npx cypress run
//  npx cypress run --spec "cypress\e2e\3-basics\28.environments.cy.js" --browser chrome --headed --config-file prod.config.js
// npx cypress run --spec "cypress\e2e\3-basics\28.environments.cy.js" --browser edge --headed --config-file stage.config.js

//third way to create short cut command
// create below script command in package.json
// "stage-test" : "npx cypress run --spec 'cypress/e2e/3-basics/28.environments.cy.js' --browser edge --headed --config-file stage.config.js ",
// "prod-test" : "npx cypress run --spec 'cypress/e2e/3-basics/28.environments.cy.js' --browser chrome --headed --config-file prod.config.js"
// then run following command on cli
// npm run prod-test
// npm run stage-test
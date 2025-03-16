///<reference types="cypress"/>
import HomePage from '../Pages/4.DemoQa'
import Data from '../../../fixtures/POMData/4.DemoQaData'

describe('Verifying DemoQA Registeration page', () => {
    let Hp = new HomePage()

    Data.forEach((Userdata) => {
        it(`Register and Login for new User ${Userdata.Fn}`, () => {

            Hp.VisitUrl(Hp.Selectors.url)
            Hp.RegisterUser(Userdata)
        })
    })

})
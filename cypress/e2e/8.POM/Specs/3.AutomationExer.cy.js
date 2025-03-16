///<reference types="cypress"/>
import Hpage from '../Pages/3.AutomationExer'
import data from '../../../fixtures/POMData/3.AutoExData'

describe('Verifying Automation Exercise Site with POM', () => {
    let HP = new Hpage()

    data.forEach((ele) => {

        it(`Login for new user ${ele.NewUName}`, () => {
            HP.VisitUrl(HP.Selectors.url)
            HP.buttonClick(HP.Selectors.LoginSignup)
            HP.NewUser(ele)
            HP.buttonClick(HP.Selectors.LogOut)
            HP.Login_SignUp(HP.Selectors.UserEmail, HP.Selectors.UserPass, HP.Selectors.LoginBtn, ele.NewUEml, ele.Password)
            HP.Validation(HP.Selectors.Loggedas, ele.NewUName)
            HP.DeleteAccount()
            HP.buttonClick(HP.Selectors.LoginSignup)
            HP.Login_SignUp(HP.Selectors.UserEmail, HP.Selectors.UserPass, HP.Selectors.LoginBtn, ele.NewUEml, ele.Password)
            HP.Validation(HP.Selectors.IncorrectEmailPass, HP.Selectors.IncorrectTxt)
        })
    })
})
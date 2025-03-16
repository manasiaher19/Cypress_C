///<reference types ="cypress"/>
import HomePage from '../Pages/1.ContactUsPage'
import data from '../../../fixtures/example.json'

describe('Verify Contact us with POM', () => {

    let Hp = new HomePage()
    it('Contact Us with valid Credentials', () => {
        Hp.visitUrl()
        Hp.ContactUsPage('mana', 'aher', 'ma@email.com', 'Learning!')
        Hp.Submit()
        Hp.ValidationSubmit()
    })
    //--------------------------------------------------------
    let User = {
        fname: 'Manish',
        lname: 'Aher',
        email: 'manish@email.com',
        comm: 'Learning Cypress'
    }
    it('Contact Us with valid Credentials using object', () => {
        Hp.visitUrl()
        Hp.ContactUsPage2(User)
        Hp.Submit()
        Hp.ValidationSubmit()
    })

    //-------------------------------------------------------
    data.forEach((ele, index) => {
        it.only(`Contact Us with valid Credentials using fixture object ${ele.fname}`, () => {
            Hp.visitUrl()
            Hp.ContactUsPage3(ele)
            Hp.Submit()
            Hp.ValidationSubmit()
        })
    })
    //---------------------------------------------------------
    it('Contact Us with Reset Btn', () => {
        Hp.visitUrl()
        Hp.ContactUsPage('pooja', 'jadhav', 'Pj@email.com', 'Learning!')
        Hp.ResetBtn()
        Hp.ValidationReset()
    })

    it('Contact Us with Invalid Email', () => {
        Hp.visitUrl()
        Hp.ContactUsPage('nikhil', 'wale', 'nkEmail.com', 'Learing!')
        Hp.Submit()
        Hp.ValidateInvalidEmail()
    })

    it.skip('Contact Us with all fields required', () => {
        Hp.visitUrl()
        Hp.ContactUsPage('nikhil', 'wale', 'nk@email.com')
        Hp.Submit()
        Hp.EmptyField()
    })
})
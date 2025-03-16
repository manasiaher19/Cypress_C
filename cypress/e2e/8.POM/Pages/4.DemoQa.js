export default class MyDemoPage {

    Selectors = {

        url: 'https://demoqa.com/register',
        VerifyTxtCss: '#userForm>div>h4',
        VerifyTxt: 'Register to Book Store',
        FirstName: '#firstname',
        LastName: '#lastname',
        UserName: '#userName',
        Password: '#password',
        RegisterBtn: '#register',
        BackToLoginBtn: '#gotologin',
        VerifyTxtCss2: '#userForm>div>h5',
        VerifyTxt2: 'Login in Book Store',
        LoginBtn: '#login',
        BookUrl: 'https://demoqa.com/profile',
        LogOut: '#books-wrapper>div:nth-child(3)>button'
    }

    VisitUrl(url) {
        cy.visit(url)
    }

    RegisterUser(user) {
        this.Validation(this.Selectors.VerifyTxtCss, this.Selectors.VerifyTxt)
        cy.get(this.Selectors.FirstName).type(user.Fn)
        cy.get(this.Selectors.LastName).type(user.Ln)
        cy.get(this.Selectors.UserName).type(user.UName)
        cy.get(this.Selectors.Password).type(user.Pass)
        this.ButtonClick(this.Selectors.RegisterBtn)
        cy.on('window:alert', (text) => {
            expect(text).to.eq('User Register Successfully.')
            return true
        })
        this.ButtonClick(this.Selectors.BackToLoginBtn)
        this.Validation(this.Selectors.VerifyTxtCss2, this.Selectors.VerifyTxt2)
        cy.get(this.Selectors.UserName).type(user.UName)
        cy.get(this.Selectors.Password).type(user.Pass)
        this.ButtonClick(this.Selectors.LoginBtn)
        cy.url().should('contain', this.Selectors.BookUrl)
        this.ButtonClick(this.Selectors.LogOut)
    }

    ButtonClick(Btn) {
        cy.get(Btn).click()
    }

    Validation(css, Text) {
        cy.get(css).should('contain', Text)
    }
}
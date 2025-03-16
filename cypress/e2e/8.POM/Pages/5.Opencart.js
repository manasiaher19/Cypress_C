export default class MyCart {

    Selectors = {

        Url: 'https://awesomeqa.com/ui/index.php?route=checkout/cart',
        MyAccCss: '[class="fa fa-user"]',

        RegisterCss: '#top-links > ul > li.dropdown.open > ul > li:nth-child(1) > a',
        VerifyRegisterAcc: '#content>h1',
        RegisterAccTxt: 'Register Account',
        FirstN: '[name="firstname"]',
        LastN: '[name="lastname"]',
        Email: '[name="email"]',
        Tele: '[name="telephone"]',
        Pass: '[name="password"]',
        PassConfirm: '[name="confirm"]',
        SubscribeYesRadio: '.radio-inline>[value="1"]',
        SubscribeNoRadio: '.radio-inline>[value="0"]',
        PrivacyPolicyCheck: '[type="checkbox"]',
        ContinueBtn: '[type="submit"]',

        AccCreated: '#content>h1',
        AccCreatedText: 'Your Account Has Been Created!',

        LogOutCss: '[class="dropdown-menu dropdown-menu-right"]>li:nth-child(5)>a',
        VerifyAccLogOut: '#content>h1',
        AccLogOutTxt: 'Account Logout',

        LoginCss: '[class="list-group"]>a:nth-child(1)',
        LoginBtnCss: '[value="Login"]',

        MyAccountCss: '#content>h2:nth-child(1)',
        MyAccountTxt: 'My Account'

    }

    VisitUrl(url) {
        cy.visit(url)
    }

    ButtonClick(css) {
        cy.get(css).click()
    }

    Validation(css, txt) {
        cy.get(css).should('contain', txt)
    }

    RegisterLoginUser(User) {

        this.ButtonClick(this.Selectors.MyAccCss)
        this.ButtonClick(this.Selectors.RegisterCss)
        this.Validation(this.Selectors.VerifyRegisterAcc, this.Selectors.RegisterAccTxt)

        cy.get(this.Selectors.FirstN).type(User.Fn)
        cy.get(this.Selectors.LastN).type(User.Ln)
        cy.get(this.Selectors.Email).type(User.email)
        cy.get(this.Selectors.Tele).type(User.Telephone)
        cy.get(this.Selectors.Pass).type(User.Password)
        cy.get(this.Selectors.PassConfirm).type(User.PassConfirm)
        if (User.Subscribe == '1') {
            this.ButtonClick(this.Selectors.SubscribeYesRadio)
        }
        else {
            this.ButtonClick(this.Selectors.SubscribeNoRadio)
        }
        this.ButtonClick(this.Selectors.PrivacyPolicyCheck)
        cy.wait(2000)
        this.ButtonClick(this.Selectors.ContinueBtn)
        this.Validation(this.Selectors.AccCreated, this.Selectors.AccCreatedText)

        this.ButtonClick(this.Selectors.MyAccCss)
        this.ButtonClick(this.Selectors.LogOutCss)
        this.Validation(this.Selectors.VerifyAccLogOut, this.Selectors.AccLogOutTxt)
        cy.wait(2000)
    }

    LoginUser(User){
        this.ButtonClick(this.Selectors.LoginCss)
        cy.get(this.Selectors.Email).type(User.email)
        cy.get(this.Selectors.Pass).type(User.Password)
        this.ButtonClick(this.Selectors.LoginBtnCss)
        this.Validation(this.Selectors.MyAccountCss, this.Selectors.MyAccountTxt)
        cy.wait(2000)
    }
}
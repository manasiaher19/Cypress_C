export default class MyExercise {

    Selectors = {
        url: 'https://automationexercise.com/',
        LoginSignup: 'a[href="/login"]',
        //  newUserForm:'form[action="/signup"]',
        validateTxt1: '[class="signup-form"]>h2',
        Txt1: 'New User Signup!',

        //NewUserSignup
        newUserName: '[data-qa="signup-name"]',
        newUserEmail: '[data-qa="signup-email"]',
        SignUpBtn: '[data-qa="signup-button"]',
        ValidateTxt2: '#form > div > div > div > div.login-form > h2 > b',
        Txt2: 'Enter Account Information',
        MrBtn: '[id="id_gender1"]',
        MrsBtn: '[id ="id_gender2"]',
        Password: '[data-qa="password"]',
        Day: '[data-qa="days"]',
        Month: '[data-qa="months"]',
        Year: '[data-qa="years"]',
        newsLettr1: '[id="newsletter"]',
        newsLettr2: '[id="optin"]',
        Fname: '[data-qa="first_name"]',
        Lname: '[data-qa="last_name"]',
        Company: '[for="company"]',
        Addr1: '[data-qa="address"]',
        Addr2: '[data-qa="address2"]',
        Country: '[data-qa="country"]',
        State: '[data-qa="state"]',
        City: '[data-qa="city"]',
        ZipCode: '[data-qa="zipcode"]',
        MonNo: '[data-qa="mobile_number"]',
        CreateAccBtn: '[data-qa="create-account"]',

        AccCreated: '[data-qa="account-created"]',
        AccCreatedTxt: 'Account Created!',
        ContinueBtn: '[data-qa="continue-button"]',

        Loggedas: '[class="nav navbar-nav"]>li>a>b',  // Logged in as Manasi
        LogOut: 'a[href="/logout"]',

        //LoginPage
        UserEmail: '[data-qa="login-email"]',
        UserPass: '[data-qa="login-password"]',
        LoginBtn: '[data-qa="login-button"]',

        DeleteAcc: 'a[href="/delete_account"]',
        AccDeleted: 'h2>b',
        AccDeletedTxt: 'Account Deleted!',

        //LoginPage
        IncorrectEmailPass: 'p[style="color: red;"]',
        IncorrectTxt: 'Your email or password is incorrect!'
    }

    VisitUrl(url) {
        cy.visit(url)
    }

    buttonClick = (btncss) => {
        cy.get(btncss).click()
    }

    NewUser(user) {
        cy.url(this.Selectors.url).should('contain', this.Selectors.url)
        this.Validation(this.Selectors.validateTxt1, this.Selectors.Txt1)
        cy.get(this.Selectors.newUserName).type(user.NewUName)
        cy.get(this.Selectors.newUserEmail).type(user.NewUEml)
        // cy.get(this.Selectors.SignUpBtn).click()
        this.buttonClick(this.Selectors.SignUpBtn)


        this.Validation(this.Selectors.ValidateTxt2, this.Selectors.Txt2)
        if (user.Title == "Mr") {
            cy.get(this.Selectors.MrBtn).click()
        }
        else {
            cy.get(this.Selectors.MrsBtn).click()
        }
        cy.get(this.Selectors.Password).type(user.Password)
        cy.get(this.Selectors.Day).select(user.Day)
        cy.get(this.Selectors.Month).select(user.Month)
        cy.get(this.Selectors.Year).select(user.Year)
        // cy.get(this.Selectors.newsLettr1).check()
        // cy.get(this.Selectors.newsLettr2).check()
        this.buttonClick(this.Selectors.newsLettr1)
        this.buttonClick(this.Selectors.newsLettr2)
        cy.get(this.Selectors.Fname).type(user.Fn)
        cy.get(this.Selectors.Lname).type(user.Ln)
        cy.get(this.Selectors.Company).type(user.Company)
        cy.get(this.Selectors.Addr1).type(user.Addr1)
        cy.get(this.Selectors.Addr2).type(user.Addr2)
        cy.get(this.Selectors.Country).select(user.Country)
        cy.get(this.Selectors.State).type(user.State)
        cy.get(this.Selectors.City).type(user.City)
        cy.get(this.Selectors.ZipCode).type(user.Zipcode)
        cy.get(this.Selectors.MonNo).type(user.MobNo)
        // cy.get(this.Selectors.CreateAccBtn).click()
        this.buttonClick(this.Selectors.CreateAccBtn)
        this.Validation(this.Selectors.AccCreated, this.Selectors.AccCreatedTxt)


        this.buttonClick(this.Selectors.ContinueBtn)
        cy.url(this.Selectors.url).should('contain', this.Selectors.url)
        this.Validation(this.Selectors.Loggedas, user.NewUName)
    }

    Validation(css, txt) {
        cy.get(css).should('contain', txt)
    }

    Login_SignUp(NameUserId, PassEmail, LoginSignup, InputText1, InputText2) {
        cy.get(NameUserId).type(InputText1)
        cy.get(PassEmail).type(InputText2)
        this.buttonClick(LoginSignup)
    }

    DeleteAccount() {
        this.buttonClick(this.Selectors.DeleteAcc)
        this.Validation(this.Selectors.AccDeleted, this.Selectors.AccDeletedTxt)
        this.buttonClick(this.Selectors.ContinueBtn)
        cy.url(this.Selectors.url).should('contain', this.Selectors.url)
    }

}

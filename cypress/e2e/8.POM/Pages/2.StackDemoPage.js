export default class MyPractice {

    Selector = {
        url: 'https://www.bstackdemo.com/',
        SignIn_LogOut: '#signin',
        SelectUsernamePass: '[class=" css-tlfecz-indicatorContainer"]',
        LoginBtn: '#login-btn',
        // FavBtn: '[class="shelf-stopper"]',
        // Favourites: '#favourites',
        AddtoCartBtn: '[class="shelf-item__buy-btn"]',
        CheckOutBtn: '[class="buy-btn"]',
        fn: '#firstNameInput',
        ln: '#lastNameInput',
        Addr: '#addressLine1Input',
        State: '#provinceInput',
        PostalCode: '#postCodeInput',
        SubmitFormBtn: '#checkout-shipping-continue',
        PositiveValid: '#confirmation-message',
        ValidateMsg: 'Your Order has been successfully placed.',
        ContinueShoppingBtn: '.optimizedCheckout-buttonSecondary',
    }

    visitUrl() {
        cy.visit(this.Selector.url)
        cy.get(this.Selector.SignIn_LogOut).click()
    }

    LoginForm() {
        cy.get(this.Selector.SelectUsernamePass).first().type('demouser {enter}')
        cy.get(this.Selector.SelectUsernamePass).last().type('testingisfun99 {enter}')
        cy.get(this.Selector.LoginBtn).click()
    }

    AddtoCart() {
        cy.get(this.Selector.AddtoCartBtn).first().click()
    }

    CheckOut() {
        cy.get(this.Selector.CheckOutBtn).click()
    }

    Submit() {
        cy.get(this.Selector.fn).type('Manasi')
        cy.get(this.Selector.ln).type('Aher')
        cy.get(this.Selector.Addr).type('Mumbai')
        cy.get(this.Selector.State).type('Maharashtra')
        cy.get(this.Selector.PostalCode).type('56789')
        cy.get(this.Selector.SubmitFormBtn).click()
    }

    OrderPlaceMsg() {
        cy.get(this.Selector.PositiveValid).should('contain', this.Selector.ValidateMsg)
        cy.wait(3000)
        cy.get(this.Selector.ContinueShoppingBtn).click()
    }

    LogOut(){
        cy.get(this.Selector.SignIn_LogOut).click()
    }
}
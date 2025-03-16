///<reference types="cypress"/>
import MyHomePage from '../Pages/2.StackDemoPage'

describe('Verify Stack Demo site', () => {
    let myHp = new MyHomePage()
    it('e2e Testing 1', () => {
        myHp.visitUrl()
        myHp.LoginForm()
        myHp.AddtoCart()
        myHp.CheckOut()
        myHp.Submit()
        myHp.OrderPlaceMsg()
        myHp.LogOut()
    })
})
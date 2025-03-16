///<reference types="cypress"/>

import HomePage from '../Pages/5.Opencart'
import Data from '../../../fixtures/POMData/5.OpencartData'
describe('Verifying OPencart Register and login page', function () {
    let Hp = new HomePage()
    Data.forEach((userData) => {
        it(`User register and login for ${userData.Fn}`, function () {
            Hp.VisitUrl(Hp.Selectors.Url)
            Hp.RegisterLoginUser(userData)
            Hp.LoginUser(userData)
        });
    })
});

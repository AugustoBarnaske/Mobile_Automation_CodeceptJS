Feature('Login');

const { I, loginPage, homePage } = inject()

BeforeSuite (() => {
    console.log('Before suite method')
});

Before(() => {
    console.log('Before method')
});

After (() => {
    console.log('After method')
});

AfterSuite(() => {
    console.log('After suite method')
});

Scenario('Login with success', () => {
    
    loginPage.doLogin('teste@teste.com', '123456')

    homePage.checkLoginSuccess()
});

Scenario('Login with error', () => {

    loginPage.doLogin('email@teste.com', '123456')

    loginPage.checkLoginError()
});
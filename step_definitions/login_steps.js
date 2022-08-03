const { I, loginPage, homePage } = inject();
// Add in your custom step files

Given('I fill all the login fields', () => {
  I.fillField('~email', 'teste@teste.com')
  I.fillField('~senha', '123456')
});

When('I tap on Entrar', () => {
  I.tap('~entrar')
});

Then('I see the Salvar button', () => {
  I.waitForElement('~salvar', 5)
  I.seeElement('~salvar')
});

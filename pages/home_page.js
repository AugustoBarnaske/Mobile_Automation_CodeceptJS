const { I } = inject();

module.exports = {

  // insert your locators and methods here

  buttons: {
    save: '~salvar'
  },

  fields: {
    code: {
      android:'~codigo',
      ios: '(//XCUIElementTypeTextField[@name="RNE__Input__text-input"])[1]',
    },
    name: {
      android: '~aluno',
      ios: '(//XCUIElementTypeTextField[@name="RNE__Input__text-input"])[2]'
    }, 
    search: {
      android: '~search',
      ios: '(//XCUIElementTypeTextField[@name="RNE__Input__text-input"])[3]'
    }
  },

  fillCode(code){
    I.fillField(this.fields.code, code)
  },

  fillName(name){
    I.fillField(this.fields.name, name)
  },

  searchStudent(nameToSearch, codeToValidate){
    I.fillField(this.fields.search, nameToSearch)

    I.runOnIOS(() => {
      I.seeElement('(//XCUIElementTypeOther[@name="'+ codeToValidate +'"])[2]')
    })

    I.runOnAndroid(() => {
      I.seeElement('//android.view.ViewGroup[@content-desc="'+ codeToValidate +'"]/android.widget.TextView')
    })
  },

  registerNewStudent(code, name){
    I.fillField(this.fields.code, code)
    I.fillField(this.fields.name, name)
    I.tap(this.buttons.save)
  },

  checkLoginSuccess() {
    I.waitForElement(this.buttons.save, 5)
    I.seeElement(this.buttons.save)
  }
}

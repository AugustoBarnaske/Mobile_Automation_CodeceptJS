Feature('students');

const { I, loginPage, homePage } = inject()

const code = require('../Utils/code')
const name = require('../Utils/name')

Scenario('Add student with success', () => {

    const codeToInsert = code.getCode()
    const nameToInsert = name.getName()
    
    loginPage.doLogin('teste@teste.com', '123456')
    homePage.registerNewStudent(codeToInsert, nameToInsert)
    homePage.searchStudent(nameToInsert, codeToInsert)

});
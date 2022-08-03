exports.config = {
  output: './output',
   helpers: {
    Appium: {
      //Para rodar o npx codeceptjs gherkin:snippets
      //platform: 'iOSx',
      //app: '/Users/augustobarnaske/learning/appsqazando/qazandoapp.app',
      //desiredCapabilities: {
      //  deviceName: 'iPhone 11 Pro Maxxx',
      //  platformVersion: '13.1.'
      //}
      platform: process.env.PLATFORM,
      app: process.env.APP,
      desiredCapabilities: {
        deviceName: process.env.DEVICE,
        platformVersion: process.env.VERSION,
        appPackage: 
          process.env.PLATFORM == 'Android' ? process.env.PACKAGE : "",
        appActivity:
          process.env.PLATFORM == 'Android' ? process.env.ACTIVITY : ""
      }
    }

  },
  include: {
    homePage: './pages/home_page.js',
    loginPage: './pages/login_page.js',
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: './server/server.js',
  teardown: './server/server.js',
  hooks: [],
  //gherkin: {
  //  features: './features/*.feature',
  //  steps: ['./step_definitions/login_steps.js']
  //},
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    }
  },
  tests: './tests/*_test.js',
  name: 'qazando-automation'
}
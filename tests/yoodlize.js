let yo_dude = {};
module.exports = {
  beforeEach: browser => {
    yo_dude = browser.page.yoodlizePgObj()
    yo_dude.navigate()
  },
  afterEach: browser => {
    yo_dude.end()
  },
  'Test yo_qae_52 - "See All" links': browser => {
    let seeAllLinks = [
      91, 84, 85, 88, 86, 74, 77, 87, 93, 76, 97, 92, 96, 89, 95
    ];

    for (let i = 0; i < seeAllLinks.length; i++) {
      yo_dude
        .useXpath()
        .click(`//div[@sectionheader]/a[@href="/s?category=${seeAllLinks[i]}"]`)
        .pause(500)
        .expect.url().to.contain(`s?category=${seeAllLinks[i]}`);
      yo_dude
        .useCss()
        .click('@logoHomeBtn')
        .waitForElementPresent('body')
    }
  },
  'Test yo_qae_52 - "Browse Categories" links': browser => {
    let browseCategories = [
      86, 84, 85, 88, 91, 74, 77, 87, 93, 76, 97, 92, 96, 95
    ];

    for (let j = 0; j < browseCategories.length; j++) {
      yo_dude
        .useXpath()
        .click(`//div[contains(text(), "Browse Categories")]/following-sibling::div/a[@href="/s?category=${browseCategories[j]}"]`)
        .pause(1000)
        .expect.url().to.contain(`s?category=${browseCategories[j]}`);
      yo_dude
        .useCss()
        .click('@logoHomeBtn')
        .waitForElementPresent('body')
    }
  },
  'Test yo_qae_53 - Launchpad Mk2': browser => {
    let searchTerm = "Mk2";
    let item = {
      title: 'Launchpad Mk2',
      price: '5',
      city: 'Provo, UT'
    }
    yo_dude
      .useXpath()
      .setValue('@searchFieldHome', searchTerm)
      .click('@searchButton')
      .pause(1000)
      // opens page with results of search
      .verify.urlContains(`s?&keyword=${searchTerm}`)
      .verify.containsText('@blueKeywordFilter', searchTerm)
      // check that search input field has search term (FAIL! per QAE-53): 
      .verify.not.value('@searchFieldResults', searchTerm)
      // check"appropriate results" - keyword in name of result: 
      .verify.containsText('@itemTitleResults', searchTerm)
      // check arrow navigation between images:
      .verify.visible('@imageNavRight')
      .click('@imageNavRight')
      .verify.visible('@imageNavLeft')
      .verify.containsText('@itemPriceResults', item.price)
      .click('@imageLink')
      // opens details page
      .verify.containsText('@itemTitleDetails', item.title)
      .verify.containsText('@itemCityDetails', item.city)
      .verify.elementPresent('@itemRentalRules') 
      .verify.elementPresent('@description')
      .verify.elementPresent('@itemOwner')
  }
}
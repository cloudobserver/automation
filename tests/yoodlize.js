module.exports = {
  beforeEach: browser => {
    browser
      .url('https://alpha.yoodlize.com/')
      .waitForElementPresent('body')
  },
  after: browser => {
    browser.end()
  },
  'Test yo_qae_52 - "See All" links': browser => {
    let seeAllLinks = [
      91, 84, 85, 88, 86, 74, 77, 87, 93, 76, 97, 92, 96, 89, 95
    ];

    for (let i = 0; i < seeAllLinks.length; i++) {
      browser
        .useXpath()
        .click(`//div[@sectionheader]/a[@href="/s?category=${seeAllLinks[i]}"]`)
        .pause(500)
        .expect.url().to.contain(`s?category=${seeAllLinks[i]}`);
      browser
        .useCss()
        .click('a.navbar-brand')
        .waitForElementPresent('body')
    }
  },
  'Test yo_qae_52 - "Browse Categories" links': browser => {
    let browseCategories = [
      86, 84, 85, 88, 91, 74, 77, 87, 93, 76, 97, 92, 96, 95
    ];

    for (let j = 0; j < browseCategories.length; j++) {
      browser
        .useXpath()
        .click(`//div[contains(text(), "Browse Categories")]/following-sibling::div/a[@href="/s?category=${browseCategories[j]}"]`)
        .pause(1000)
        .expect.url().to.contain(`s?category=${browseCategories[j]}`);
      browser
        .useCss()
        .click('a.navbar-brand')
        .waitForElementPresent('body')
    }
  },
  'Test yo_qae_53 - Launchpad Mk2': browser => {
      let searchTerm = "Mk2"
      browser
        .useXpath()
        .setValue('//div[@class="form-group"]/input', `${searchTerm}`)
        .click('//div[@class="form-group"]/input/following-sibling::button')
        .pause(1000)
        .verify.urlContains(`s?&keyword=${searchTerm}`)
        .verify.containsText('//div[@class="sc-jKVCRD jSqgxr"]', `${searchTerm}`)
        .useCss()
        .verify.value('#keyword-search-input', `${searchTerm}`)
        .verify.containsText('#card-title', 'Mk2')//`${searchTerm}`)
        .verify.visible('i.fa-angle-right')
        .click('i.fa-angle-right')
        .verify.visible('i.fa-angle-left')
        .verify.containsText('div._2J6OR._246En._3hOq8', '5')
  }
}

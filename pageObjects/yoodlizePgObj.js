module.exports = {
  url: 'https://alpha.yoodlize.com/',
  elements: {
    logoHomeBtn: 'a.navbar-brand',
    searchFieldHome: {
      selector: '//div[@class="form-group"]/input',
      locateStrategy: 'xpath'
    },
    searchButton: {
      selector: '//div[@class="form-group"]/input/following-sibling::button',
      locateStrategy: 'xpath'
    },
    blueKeywordFilter: {
      selector: '//div[@class="sc-jKVCRD jSqgxr"]',
      locateStrategy: 'xpath'
    },
    searchFieldResults: '#keyword-search-input',
    itemTitleResults: '#card-title',
    imageNavRight: 'i.fa-angle-right',
    imageNavLeft: 'i.fa-angle-left',
    itemPriceResults: 'div._2J6OR._246En._3hOq8',
    imageLink: 'div._1WAWo',
    itemTitleDetails: 'div.hxTVNb.fptSCa',
    itemCityDetails: 'div.lhtIrb.jmxqrS',
    itemRentalRules: 'ul.sc-fYiAbW.fhICTT',
    description: {
      selector: '//div[contains(text(), "Description")]/following-sibling::div',
      locateStrategy: 'xpath'
    },
    itemOwner: {
      selector: '//a[@href="/users/show/222"]',
      locateStrategy: 'xpath'
    }
  },
  commands: [{}]
}

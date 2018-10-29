//set these variables so that the test can run successfully. The resultsContainer value has already been provided.
var testData = ['lightsaber', 'lkj', 'Legos']

var cheeseburger = {}

module.exports = {
    beforeEach: browser => {
        cheeseburger = browser.page.steve()
        cheeseburger.navigate()
        // browser.url('http://amazon.com')
    },
    'Search for an item': browser => {
        cheeseburger
            .setValue('@searchBar', testData[0])
            .click('@searchButton')
            .expect.element('@resultsContainer').text.to.contain(testData[0]).before(10000)
    },
    after: browser => {
        browser.end()
    }
}
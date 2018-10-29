var amazon = {}
var items = []
var itemCount = 0
var searchTerms = ['Who moved my cheese?', 'Imagine Dragons', 'Ping Pong Ball', 'The Scarlet Pimpernel']

var addToCart = require('../testAssets/amazonFunction')

var myString = require('../testAssets/testString')


// var addToCart = (blue, searchTerm) => {
//     //add an item to the cart with this function
//     blue
//         .setValue('@searchBar', searchTerm)
//         .click('@searchButton')
//         .waitForElementVisible('@resultsContainer', 5000)
//         .click('@firstResult')
//         .waitForElementVisible('@addToCartButton', 5000)
//         .getText('@itemTitle', results => {
//             items.push(results.value)
//             itemCount++
//         })
//         .click('@addToCartButton')
//         .waitForElementVisible('@addedToCart', 5000)
// }

var verifyCart = () => {
    //this is a stretch goal to verify the contents of the cart

}

module.exports = {
    beforeEach: function (browser) {
        amazon = browser.page.amazon();
        amazon.navigate()
        console.log(myString)
    },
    'Add one item to cart': browser => {
        addToCart(amazon, searchTerms[0])
    },
    'Add two items to cart': browser => {
        addToCart(amazon, searchTerms[1])
        addToCart(amazon, searchTerms[2])
    },
    'Add multiple of one': browser => {
        amazon
            .setValue('@searchBar', searchTerms[3])
            .click('@searchButton')
            .waitForElementVisible('@resultsContainer', 5000)
            .click('@firstResult')
            .waitForElementVisible('@addToCartButton', 5000)
            .getText('@itemTitle', results => {
                items.push(results.value)
                itemCount++
            })
            .click('@quantityDropDown')
            .click('@quantityTwo')
            .api.pause(2000)
        itemCount++
        amazon
            .click('@addToCartButton')
            .waitForElementVisible('@addedToCart', 5000)
    },
    afterEach: (browser, finished) => {
        // amazon.click('@cartButton')

        // browser.perform(done => {
        //     browser.useXpath()
        //     items.forEach(item => {
        //         amazon.verify.visible('(//span[@class="a-list-item"])[contains(.,"' + item + '")]')
        //     })
        //     amazon.verify.containsText('@subtotal', itemCount + ' item')
        //     items = []
        //     itemCount = 0
        //     browser.useCss()
        //     browser.end()
        //     done()
        // }).perform(done => {
        //     finished()
        //     done()
        // })

    }
}
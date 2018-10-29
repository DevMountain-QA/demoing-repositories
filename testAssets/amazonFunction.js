module.exports = (blue, searchTerm) => {
    //add an item to the cart with this function
    blue
        .setValue('@searchBar', searchTerm)
        .click('@searchButton')
        .waitForElementVisible('@resultsContainer', 5000)
        .click('@firstResult')
        .waitForElementVisible('@addToCartButton', 5000)
        .click('@addToCartButton')
        .waitForElementVisible('@addedToCart', 5000)
}
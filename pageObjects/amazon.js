module.exports = {
    url: 'http://www.amazon.com',
    elements: {
        searchBar: '#twotabsearchtextbox',
        searchButton: 'input[value=Go]',
        resultsContainer: '#atfResults',
        firstResult: {
            selector: '(//h2[contains(@class, "s-access-title")])[1]',
            locateStrategy: 'xpath'
        },
        addToCartButton: '#add-to-cart-button',
        itemTitle: '#productTitle',
        quantityDropDown : '#quantity',
        quantityOne: 'option[value="1"]',
        quantityTwo: 'option[value="2"]',
        addedToCart: {
            selector: '//h1[contains(.,"Added to Cart")]',
            locateStrategy: 'xpath'
        },
        cartButton: '#hlb-view-cart-announce',
        subtotal: '#sc-subtotal-label-activecart'
    }
}
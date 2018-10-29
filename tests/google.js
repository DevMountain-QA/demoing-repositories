module.exports = {
    beforeEach: browser => {
        browser.url('http://www.google.com')
    },
    after: browser => {
        browser.end()
    },
    'Google Search': browser => {

    },
    "I'm feeling lucky": browser => {

    }
} 
module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
            .waitForElementPresent('#versionNumber', 5000)
    },
    after: browser => {
        browser.end()
    },
    'Submit a valid query': browser => {
        browser
            .setValue('header field selector', '1234567890')
            .setValue('mke field selector', 'ABC')
            .setValue('originating agency identifier selector', 'OAI123456')
            .setValue('name field selector', 'Harry Dresden')
            .setValue('sex field selector', 'M')
            .setValue('race field selector', 'W')
            .setValue('height field selector', '607')
            .setValue('weight field selector', '225')
            .setValue('hair field selector', 'Brown')
            .setValue('offense field selector', 'Arson')
            .setValue('date of warrant/violation field selector', '10312010')
            .click('save button selector')
            .expect.element('query body selector').text.to.equal('1234567890.ABC.OAI123456.Harry Dresden.M.W.607.225.Brown.Arson.10312010......').before(500)
    },
    'Submit an invalid query': browser => {
        browser.setValue('name field selector', 'Waldo Butters')
            .setValue('offense field selector', 'Polka')
            .click('save button selector')
            .expect.element('query title selector').text.to.equal('No results generated due to error.').before(500)
    }
}
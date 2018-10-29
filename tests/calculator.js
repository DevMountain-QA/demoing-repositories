module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/nightwatch-introduction/build/')
            .waitForElementVisible('.calculator', 5000)
    },
    after: browser => {
        browser.end()
    },
    'Check button text': browser => {
        //add assertions to check that all of the calculator buttons are correct

        //no commands should be required here
    },
    '2 + 2 = 4': browser => {
        browser
            .click('button[name="2Button"]')
            .click('button[name="addButton"]')
            .click('button[name="2Button"]')
            .click('button[name="equalsButton"]')
            //add an assertion to check that the final result is 4
            .expect.element('span').text.to.equal('4')
    },
    "Does the +/- button work?" : browser => {
        
    }
    //feel free to add more tests checking different calculations.
}
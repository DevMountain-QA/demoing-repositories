module.exports = {
    url: 'https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html',
    elements: {
        headerInput: 'input[name="hdrInput"]',
        mkeInput: 'input[name="mkeInput"]',
        originatingAgencyInput: 'input[name="oriInput"]',
        nameInput: 'input[name="namInput"]',
        sexInput: 'input[name="sexInput"]',
        raceInput: 'input[name="racInput"]',
        heightInput: 'input[name="hgtInput"]',
        weightInput: 'input[name="wgtInput"]',
        hairInput: 'input[name="haiInput"]',
        offenseInput: 'input[name="offInput"]',
        dateOfWarrantInput: 'input[name="dowInput"]',
        olnInput: 'input[name="olnInput"]',
        olStateInput: 'input[name="olsInput"]',
        olExpirationInput: 'input[name="olyInput"]',
        plateInput: 'input[name="licInput"]',
        plateStateInput: 'input[name="lisInput"]',
        plateExpirationInput: 'input[name="liyInput"]',
        submitButton: {
            selector: '//button[text()=" Submit "]',
            locateStrategy: 'xpath'
        },
        clearButton: '#clearBtn',
        outputHeader: '#validHeader',
        queryTitle: 'span[name="queryTitle"]',
        queryBody: 'span[name="queryBody"]',
        errorList: '#errorList'
    }
}
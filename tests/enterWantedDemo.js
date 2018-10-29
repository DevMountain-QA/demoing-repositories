var enterWanted = {}
/*
 {header: "",mke: "",originatingAgency: "",name: "",sex: "",race: "",height: "",weight: "",hair: "",offense: "",dateOfWarrant: "", outputHeader: "", resultsSelector: "", results: ""}
*/

var fillOutForm = (driver, warrantInfo) => {
    driver
        .setValue('@headerInput', warrantInfo.header)
        .setValue('@mkeInput', warrantInfo.mke)
        .setValue('@originatingAgencyInput', warrantInfo.originatingAgency)
        .setValue('@nameInput', warrantInfo.name)
        .setValue('@sexInput', warrantInfo.sex)
        .setValue('@raceInput', warrantInfo.race)
        .setValue('@heightInput', warrantInfo.height)
        .setValue('@weightInput', warrantInfo.weight)
        .setValue('@hairInput', warrantInfo.hair)
        .setValue('@offenseInput', warrantInfo.offense)
        .setValue('@dateOfWarrantInput', warrantInfo.dateOfWarrant)
        .click('@submitButton')
        .expect.element('@outputHeader').text.to.equal(warrantInfo.outputHeader).before(100000)
    driver
        .expect.element(warrantInfo.resultsSelector).text.to.equal(warrantInfo.results)
}

module.exports = {
    beforeEach: browser => {
        enterWanted = browser.page.enterWanted()
        enterWanted
            .navigate()
            .assert.visible('@mkeInput')
    },
    after: function (browser) {
        browser.end()
    },
    'Valid Entry': () => {
        fillOutForm(enterWanted, { header: '123456789', mke: "MKE", originatingAgency: "CHI123456", name: "Harry Dresden", sex: "M", race: "W", height: "611", weight: "200", hair: "Black", offense: "Arson", dateOfWarrant: "10312017", outputHeader: "Valid", resultsSelector: "@queryBody", results: "123456789.MKE.CHI123456.Harry Dresden.M.W.611.200.Black.Arson.10312017......" })
    },
    'Header Short': browser => {
        let invalidEntry = { header: '12345678', mke: "MKE", originatingAgency: "CHI123456", name: "Harry Dresden", sex: "M", race: "W", height: "611", weight: "200", hair: "Black", offense: "Arson", dateOfWarrant: "10312017", outputHeader: "Errors Received:", resultsSelector: "@errorList", results: 'The "Header" field should be between 9 and 19 characters long.' }
        fillOutForm(enterWanted, invalidEntry)
    },
    'Header Long': browser => {
        let invalidEntry = { header: '12345678901234567890', mke: "MKE", originatingAgency: "CHI123456", name: "Harry Dresden", sex: "M", race: "W", height: "611", weight: "200", hair: "Black", offense: "Arson", dateOfWarrant: "10312017", outputHeader: "Errors Received:", resultsSelector: "@errorList", results: 'The "Header" field should be between 9 and 19 characters long.' }
        fillOutForm(enterWanted, invalidEntry)
    }
}
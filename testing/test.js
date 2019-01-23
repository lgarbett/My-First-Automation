
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
            .setValue('.inputField[name="hdrInput"]', '1234567890')
            .setValue('.inputField[name="mkeInput"]', 'ABC')
            .setValue('.inputField[name="oriInput"]', 'OAI123456')
            .setValue('.inputField[name="namInput"]', 'Harry Dresden')
            .setValue('.inputField[name="sexInput"]', 'M')
            .setValue('.inputField[name="racInput"]', 'W')
            .setValue('.inputField[name="hgtInput"]', '607')
            .setValue('.inputField[name="wgtInput"]', '225')
            .setValue('.inputField[name="haiInput"]', 'Brown')
            .setValue('.inputField[name="offInput"]', 'Arson')
            .setValue('.inputField[name="dowInput"]', '10312010')
            .click('#saveBtn')
            .expect.element('[name="queryBody"]').text.to.equal('1234567890.ABC.OAI123456.Harry Dresden.M.W.607.225.Brown.Arson.10312010......').before(500)
    },
    'Submit an invalid query': browser => {
        browser
            .setValue('.inputField[name="namInput"]', 'Waldo Butters')
            .setValue('.inputField[name="offInput"]', 'Polka')
            .click('#saveBtn')
            .expect.element('[name="queryTitle"]').text.to.equal('No results generated due to error.').before(500)
    },
    'Check for error messages': browser => {
        browser
            .setValue('input[name="hdrInput"]', '1234567890')
            .setValue('input[name="mkeInput"]', 'ABC')
            .setValue('input[name="oriInput"]', 'OAI123456')
            .setValue('input[name="namInput"]', 'Harry Dresden')
            .setValue('input[name="sexInput"]', 'M')
            .setValue('input[name="racInput"]', 'W')
            .setValue('input[name="hgtInput"]', '607')
            .setValue('input[name="wgtInput"]', '225')
            .setValue('input[name="haiInput"]', 'Brown')
            .setValue('input[name="offInput"]', 'Arson')
            .setValue('input[name="dowInput"]', '10312010')
            .setValue('input[name="olnInput"]', 'ABC123')
            .click('#saveBtn')
            .expect.element('#errorList').text.to.equal("If Operator's License Number, DL State, or DL Expiration Year are present, all three must be present.").before(500)
    }
}

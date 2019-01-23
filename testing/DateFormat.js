module.exports = {
    beforeEach: browser => {
        //Navigate to the Enter-Wanted site.
        browser.url('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
            .waitForElementPresent('.cake', 5000) 
    },
    after: browser => {
        browser.end()
    },

    'Valid Date Format Functionality QOLG-33': browser => {
        //Enter valid data into all fields including Drivers License fields.
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
        .setValue('.inputField[name="olnInput"]', '123456')
        .setValue('.inputField[name="olsInput"]', 'UT')
        .setValue('.inputField[name="olyInput"]', '10312010')
        //Click Submit
        .click('#saveBtn')
        //The data will be accepted without errors.
        .expect.element('[name="queryBody"]').text.to.contain('1234567890.ABC.OAI123456.Harry Dresden.M.W.607.225.Brown.Arson.10312010.123456.UT.10312010')
    },
    'invalid Date Format Functionality QOLG-33': browser => {
        //Enter valid data into all the fields other than the Date of Warrant/Violation and DL Expiration Date fields. Enter a future date into those fields.
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
        .setValue('.inputField[name="dowInput"]', '10312020')
        .setValue('.inputField[name="olnInput"]', '123456')
        .setValue('.inputField[name="olsInput"]', 'UT')
        .setValue('.inputField[name="olyInput"]', '10312020')
        //Click Submit
        .click('#saveBtn')
        //An error message will show stating that the data is invalid. 
        .expect.element('span[name="queryTitle"]').text.to.equal('No results generated due to error.')
},

}
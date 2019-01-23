var wantedPageObjects = {}

let clickByText = require('./testAssests/clickByText')

let validEntry = require('./testAssests/validEntry')

module.exports = {
    beforeEach: browser => {
        wantedPageObjects = browser.page.wantedPageObjects()
        browser.url('http://localhost:3000/#/')
        .waitForElementPresent('.titleBar', 10000)

    },
    after: browser => {
        browser.end()
    },

    'Submit a successful entry QOLG-79 & QOLG-80': browser => {
        wantedPageObjects
        .click('@burger')
        browser.pause(500)
        clickByText(browser, 'Enter Wanted')
        // wantedPageObjects.fillOutForm(validEntry[0])
        console.log(wantedPageObjects)
        .expect.element('[name="queryBody"]').text.to.contain('1234567890.ABC.OAI123456.Harry Dresden.M.W.607.225.Brown.Arson.2010-10-31......')


    },

    'Invalid Character Lengths Functionality QOLG-74': browser => {
            wantedPageObjects
            .click('@burger')
            browser.pause(500)
            clickByText(browser, 'Enter Wanted')
            wantedPageObjects
            .setValue('@header', '1234567890')
            .setValue('@mke', 'ABC')
            .setValue('@oai', 'OAI12345')
            .setValue('@name', 'Harry Dresden')
            .setValue('@sex', 'M')
            .setValue('@race', 'W')
            .setValue('@height', '607')
            .setValue('@weight', '225')
            .setValue('@hair', 'Brown')
            .setValue('@offense', 'Arson')
            .setValue('@dow', '10312010')
            .click('@submit')
            .expect.element('.errorMessage').text.to.contain('The "Originating Agency Identifier" field should be 9 characters long.')

    },

    'Invalid Characters Functionality QOLG-75': browser => {
        wantedPageObjects
        .click('@burger')
        browser.pause(500)
        clickByText(browser, 'Enter Wanted')
        wantedPageObjects
        .setValue('@header', '1234567890')
        .setValue('@mke', 'ABC')
        .setValue('@oai', 'OAI12345!')
        .setValue('@name', 'Harry Dresden')
        .setValue('@sex', 'M')
        .setValue('@race', 'W')
        .setValue('@height', '607')
        .setValue('@weight', '225')
        .setValue('@hair', 'Brown')
        .setValue('@offense', 'Arson')
        .setValue('@dow', '10312010')
        .click('@submit')
        .expect.element('.errorMessage').text.to.contain('The "Originating Agency Identifier" field can only include characters from the English Alphabet or numeric characters.')

},

'Require all fields QOLG-77': browser => {
    wantedPageObjects
    .click('@burger')
    browser.pause(500)
    clickByText(browser, 'Enter Wanted')
    wantedPageObjects
    .setValue('@header', '')
    .setValue('@mke', 'ABC')
    .setValue('@oai', 'OAI123456')
    .setValue('@name', 'Harry Dresden')
    .setValue('@sex', 'M')
    .setValue('@race', 'W')
    .setValue('@height', '607')
    .setValue('@weight', '225')
    .setValue('@hair', 'Brown')
    .setValue('@offense', 'Arson')
    .setValue('@dow', '10312010')
    .click('@submit')
    .expect.element('.errorMessage').text.to.contain('The field named "Header" must be included.')

},

'Require all DL fields QOLG-78': browser => {
    wantedPageObjects
    .click('@burger')
    browser.pause(500)
    clickByText(browser, 'Enter Wanted')
    wantedPageObjects
    .setValue('@header', '1234567890')
    .setValue('@mke', 'ABC')
    .setValue('@oai', 'OAI123456')
    .setValue('@name', 'Harry Dresden')
    .setValue('@sex', 'M')
    .setValue('@race', 'W')
    .setValue('@height', '607')
    .setValue('@weight', '225')
    .setValue('@hair', 'Brown')
    .setValue('@offense', 'Arson')
    .setValue('@dow', '10312010')
    .setValue('@dl', '123456789')
    .setValue('@dlState', 'UT')
    .setValue('@dlExpire', '12292018')
    .click('@submit')
    browser.pause(1000)
    .expect.element('[name="queryBody"]').text.to.contain('1234567890.ABC.OAI123456.Harry Dresden.M.W.607.225.Brown.Arson.2010-10-31.123456789.UT.2018-12-29...')

},

'Error if not all DL fields have data QOLG-78': browser => {
    wantedPageObjects
    .click('@burger')
    browser.pause(500)
    clickByText(browser, 'Enter Wanted')
    wantedPageObjects
    .setValue('@header', '1234567890')
    .setValue('@mke', 'ABC')
    .setValue('@oai', 'OAI123456')
    .setValue('@name', 'Harry Dresden')
    .setValue('@sex', 'M')
    .setValue('@race', 'W')
    .setValue('@height', '607')
    .setValue('@weight', '225')
    .setValue('@hair', 'Brown')
    .setValue('@offense', 'Arson')
    .setValue('@dow', '10312010')
    .setValue('@dl', '123456789')
    .setValue('@dlState', 'UT')
    .setValue('@dlExpire', '')
    .click('@submit')
    .expect.element('.errorMessage').text.to.contain('If one of the following are present, all must be present: Drivers License, DL State, DL Expiration Date.')

},

    'Modify existing entries QOLG-90': browser => {
        wantedPageObjects
        .click('@burger')
        browser.pause(500)
        clickByText(browser, 'Modify Wanted')
        wantedPageObjects
        .setValue('@warrantId', '1234567890')
        .setValue('@name', 'Lyndsay Test')
        .click('@submit')
        browser.pause(1000)
        .expect.element('[name="queryBody"]').text.to.contain('1234567890....Lyndsay Test....000........')

    },

    'Cancel existing entries QOLG-91': browser => {
        wantedPageObjects
        .click('@burger')
        browser.pause(500)
        clickByText(browser, 'Cancel Wanted')
        wantedPageObjects
        .setValue('@warrantId', '1234567890')
        .setValue('@reasonCancel', 'Released')
        .setValue('@dateCancel', '12132018')
        .click('@submit')
        browser.pause(1000)
        .expect.element('[name="queryBody"]').text.to.contain('1234567890.Released.2018-12-13')
    },
}


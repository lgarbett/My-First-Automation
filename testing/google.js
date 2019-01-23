module.exports = {
    beforeEach: browser => {
        browser.url('https://www.google.com/')
            .waitForElementPresent('input[name="q"]', 5000) 
    },
    after: browser => {
        browser.end()
    },
    'google search': browser => {
        browser
            .setValue('input[name="q"]', 'Walmart')
            .keys(browser.Keys.ENTER)
            .waitForElementPresent('.DI6Ufb', 5000)
        .expect.element('body').text.to.contain('Walmart')

    },
    'feeling lucky search': browser => {
        browser
            .setValue('input[name="q"]', 'Walmart')
            .keys(browser.Keys.TAB)
            .keys(browser.Keys.TAB)
            .useXpath()
            .click('(//input[@name="btnI"])[2]')
            .useCss()
            .waitForElementPresent('.CustomerConnection', 5000)
        .expect.element('.CustomerConnection').text.to.contain('Start Shopping')

    }
}

module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/nightwatch-introduction/build/')
            .waitForElementVisible('.calculator', 5000)
    },
    after: browser => {
        browser.end()
    },
    'Check button text': browser => {
    browser 
        .expect.element('button[name="clearButton"]').text.to.equal('AC')
    browser
        .expect.element('button[name="negativeButton"]').text.to.equal('+/-')
    browser
        .expect.element('button[name="percentButton"]').text.to.equal('%')
    browser
        .verify.containsText('button[name="divideButton"]','÷')
    browser
        .expect.element('button[name="7Button"]').text.to.equal('7')
    browser
        .expect.element('button[name="8Button"]').text.to.equal('8')
    browser
        .expect.element('button[name="9Button"]').text.to.equal('9')
    browser
        .expect.element('button[name="multiplyButton"]').text.to.equal('×')
    browser
        .expect.element('button[name="4Button"]').text.to.equal('4')
    browser
        .expect.element('button[name="5Button"]').text.to.equal('5')
    browser
        .expect.element('button[name="6Button"]').text.to.equal('6')
    browser
        .expect.element('button[name="subtractButton"]').text.to.equal('-')
    browser
        .expect.element('button[name="1Button"]').text.to.equal('1')
    browser
        .expect.element('button[name="2Button"]').text.to.equal('2')
    browser
        .expect.element('button[name="3Button"]').text.to.equal('3')
    browser
        .expect.element('button[name="addButton"]').text.to.equal('+')
    browser
        .expect.element('button[name="0Button"]').text.to.equal('0')
    browser
        .expect.element('button[name="decimalButton"]').text.to.equal('.')
    browser
        .expect.element('button[name="equalsButton"]').text.to.equal('=')
        
    },
    '2 + 2 = 4': browser => {
        browser
            .click('button[name="2Button"]')
            .click('button[name="addButton"]')
            .click('button[name="2Button"]')
            .click('button[name="equalsButton"]')
            .expect.element('.display').text.to.equal('4')

    },
    //feel free to add more tests checking different calculations.
}
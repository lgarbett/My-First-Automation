
var mathMethods = {
    /**
     * returns the numbers added together
     * @param {number} num1 first number
     * @param {number} num2 second number
     */
    add: (num1, num2) => {
        return num1 + num2
    },
    /**
     * returns the remainder of the first number minus the first
     * @param {number} num1 first number
     * @param {number} num2 second number
     */
    subtract: (num1, num2) => {
        return num1 - num2
    },
    /**
     * returns the quotient of the first number / the second
     * @param {number} num1 first number
     * @param {number} num2 second number
     */
    divide: (num1, num2) => {
        return num1 / num2
    },
    /**
     * returns the product of the first number * the second
     * @param {number} num1 first number
     * @param {number} num2 second number
     */
    multiply: (num1, num2) => {
        return num1 * num2
    }
}

module.exports = {
    beforeEach: browser => {
        browser.url('http://www.google.com')
    },
    'check addition': browser => {
        browser
            .setValue('input[type="text"]', ['1+2', browser.Keys.ENTER])
            .waitForElementPresent('#cwos', 2000)
            .expect.element('#cwos').text.to.equal(mathMethods.add(1, 2))
    },
    'check subtraction': browser => {
        browser
            .setValue('input[type="text"]', ['32-5', browser.Keys.ENTER])
            .waitForElementPresent('#cwos', 2000)
            .expect.element('#cwos').text.to.equal(mathMethods.subtract(32, 5))
    },
    'check division': browser => {
        browser
            .setValue('input[type="text"]', ['8/2', browser.Keys.ENTER])
            .waitForElementPresent('#cwos', 2000)
            .expect.element('#cwos').text.to.equal(mathMethods.divide(8, 2))
    },
    'check multiplication': browser => {
        browser
            .setValue('input[type="text"]', ['2345.3333*2', browser.Keys.ENTER])
            .waitForElementPresent('#cwos', 2000)
            .expect.element('#cwos').text.to.equal(mathMethods.multiply(2345.3333, 2))
    },
    after: browser => browser.end()
}

module.exports = {
    beforeEach: browser => {
        // Load the React app 
        browser.url('https://devmountain-qa.github.io/Automation-Basics/build/')
            .waitForElementPresent('.puzzleFeed', 5000) 
    },
    after: browser => {
        browser.end()
    },
    'Evens and Odds': browser => {
        // Filter any number entered into the Even and Odd input field by Even Numbers and Odd Numbers. 
        browser
            .setValue('input[name="evenOddInput"]', '1234567890')
            .click('button[name="evenOddButton"]')
            .expect.element('span[name="evenResults"]').text.to.equal("Evens: [1234567890]")
    },

    'Filter Object': browser => {
        // Filter any data entered into the Filter Object field. For Example filter by hair color: Brown. 
        browser
            .setValue('input[name="objectFilterInput"]', 'hairColor')
            .click('button[name="objectFilterButton"]')
            .expect.element('span[name="objectFilterResults"]').text.to.contain("hairColor")
    },

    'Filter String': browser => {
        browser
        // Filter names entered into the Filter String field. 
            .setValue('#nameFilterInput', 'James')
            .click('#nameFilterButton')
            .expect.element('span[name="nameFilterResults"]').text.to.contain("Filtered Names")
    },

    'Invalid Filter String': browser => {
        browser
        // Make sure no data is being filtered if invalid data is entered into the Invalid Filter String field. 
            .setValue('#nameFilterInput', 'john')
            .click('#nameFilterButton')
            .expect.element('span[name="nameFilterResults"]').text.to.equal("Filtered Names: []")
    },

    'Palindrome True': browser => {
        browser
        // Enter a Palidrome word "word spelt the same forward and backwards" and make sure the results display true.
            .setValue('input[name="palindromeInput"]', 'madam')
            .click('button[name="palindromeButton"]')
            .expect.element('span[name="palindromeResults"]').text.to.equal("Palindrome: true")
    },    

    'Palindrome False': browser => {
        browser
        // Enter a non Palidrome word "word spelt the same forward and backwards" and make sure the results display false.
            .setValue('input[name="palindromeInput"]', 'lady')
            .click('button[name="palindromeButton"]')
            .expect.element('span[name="palindromeResults"]').text.to.equal("Palindrome: false")
    
    },

    'Sum': browser => {
        browser
        // Make sure the correct sum is being calculated.
            .setValue('input[name="sumInput1"]', '9')
            .setValue('input[name="sumInput2"]', '5')
            .click('button[name="sumButton"]')
            .expect.element('span[name="sumResults"]').text.to.equal("Sum: 14")


    },

}
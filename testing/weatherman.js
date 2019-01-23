var object = {};


module.exports = {
    beforeEach: browser => {
        object = browser.page.weathermanPage()
        object.navigate()
        .waitForElementPresent('@app', 5000)
    },
    after: browser => {
        browser.end()
    },
    'Search By Zip: WD-7': browser => {
        object.search('84628', 'Provo') 
    },
    'Search By City: WD-8': browser => {
        object.search('San Francisco', 'San Francisco')
    },
    'Invalid Search: WD-9': browser => {
    object
          .setValue('@searchBar', "f")
          .click('@submitButton')
          .expect.element('@errorMessage').text.to.equal('There was a problem fetching the weather!').before(1000)
    
    },
    //Stretch Activities!
    'Check Results Card': browser => {

    },
    'Check Invalid Zip Code': browser => {

    },
    'Check Invalid City/Location': browser => {

    },
    'Checking Titles/Text Values': browser => {
        
    }
}
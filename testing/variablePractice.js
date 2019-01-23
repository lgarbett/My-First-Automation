
//set these variables so that the test can run successfully. The resultsContainer value has already been provided.
var selectors = {
    searchBar: '#twotabsearchtextbox',
    searchButton: 'input[value="Go"]',
    results: '#atfResults'
} 
// var searchBarSelector = "#twotabsearchtextbox"
// var searchButtonSelector = 'input[value="Go"]'
var itemToSearchFor = "minion"
// var resultsContainer = "#atfResults"

module.exports = {
    beforeEach: browser => {
        browser.url('http://amazon.com')
    },
    'Search for an item' : browser => {
        browser
            .setValue(selectors.searchBar, itemToSearchFor)
            .click(selectors.searchButton)
            .expect.element(selectors.results).text.to.contain(itemToSearchFor).before(10000)
    },
    after: browser => {
        browser.end()
    }
}

var weathermanCommands = {
    search: function (search, result) {
        this
            .setValue('@searchBar', search)
            .click('@submitButton')
            .expect.element('@location').text.to.equal(result).before(1000)
        return this 
    }

}


module.exports = {
    url: 'https://devmountain-qa.github.io/weatherman/build/index.html',
    commands: [weathermanCommands],
    elements: {
        app: '#root',
        searchBar: '.enter-location__input',
        submitButton: 'button',
        location: '.current-weather__location',
        errorMessage: '.error-message__message',

    }

}
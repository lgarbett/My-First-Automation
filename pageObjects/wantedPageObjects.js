// var wantedQueriesCommands = {
//     search: function (search, result) {
//         this
//             .setValue('@searchBar', search)
//             .click('@submitButton')
//             .expect.element('@location').text.to.equal(result).before(1000)
//         return this 
//     }

// }


var wantedQueriesCommands = {
     fillOutForm: function(formInfo) {
        this
            .setValue('@header', formInfo.header)
            .setValue('@mke', formInfo.mke)
            .setValue('@oai', formInfo.oai)
            .setValue('@name', formInfo.name)
            .setValue('@sex', formInfo.sex)
            .setValue('@race', formInfo.race)
            .setValue('@height', formInfo.height)
            .setValue('@weight', formInfo.weight)
            .setValue('@hair', formInfo.hair)
            .setValue('@offense', formInfo.offense)
            .setValue('@dow', formInfo.dow)
        if(formInfo.oln){
            this
                .setValue('@oln', formInfo.oln)
                .setValue('@oly', formInfo.oly)
                .setValue('@ols', formInfo.ols)
        }
        if(formInfo.lic){
            this
                .setValue('@lic', formInfo.lic)
                .setValue('@liy', formInfo.liy)
                .setValue('@lis', formInfo.lis)
        }
        this
            .click('@submit')
    }
}

module.exports = {
    url: 'https://devmountain-qa.github.io/weatherman/build/index.html',
    commands: [wantedQueriesCommands],
    elements: {
       header: '.inputField[name="hdrInput"]', 
        mke: '.inputField[name="mkeInput"]', 
        oai: '.inputField[name="oriInput"]', 
        name: '.inputField[name="namInput"]', 
        sex: '.inputField[name="sexInput"]', 
        race: '.inputField[name="racInput"]', 
        height: '.inputField[name="hgtInput"]',
        weight: '.inputField[name="wgtInput"]',
        hair: '.inputField[name="haiInput"]',
        offense: '.inputField[name="offInput"]',
        dow: '.inputField[name="dowInput"]',
        dl: '.inputField[name="olnInput"]',
        dlState:'.inputField[name="olsInput"]',
        dlExpire:'.inputField[name="oldInput"]',
        license: '.inputField[name="licInput"]',
        licenseSt: '.inputField[name="lisInput"]',
        licenseExpire: '.inputField[name="lidInput"]',
        warrantId: '.inputField[name="widInput"]',
        reasonCancel: '.inputField[name="resInput"]',
        dateCancel: '.inputField[name="datInput"]',
        submit: '#saveBtn',
        clear: '#clearBtn',
        burger: '.bm-burger-button',
        enterWanted: '#outerContainer > div:nth-child(1) > div.bm-menu-wrap > div.bm-menu > nav > a:nth-child(2) > p',
        modifyWanted: '#outerContainer > div:nth-child(1) > div.bm-menu-wrap > div.bm-menu > nav > a:nth-child(3) > p',
        cancelWanted: '#outerContainer > div:nth-child(1) > div.bm-menu-wrap > div.bm-menu > nav > a:nth-child(4) > p',
        

    }

}

module.exports = {
    url: 'https://devmountain-qa.github.io/weatherman/build/index.html',
    // commands: [wantedQueriesCommands],
    elements: {
       header: '.inputField[name="hdrInput"]', 
        mke: '.inputField[name="mkeInput"]', 
        oai: '.inputField[name="oriInput"]', 
        name: '.inputField[name="namInput"]', 
        sex: '.inputField[name="sexInput"]', 
        race: '.inputField[name="racInput"]', 
        height: '.inputField[name="hgtInput"]',
        weight: '.inputField[name="wgtInput"]',
        hair: '.inputField[name="haiInput"]',
        offense: '.inputField[name="offInput"]',
        dow: '.inputField[name="dowInput"]',
        dl: '.inputField[name="olnInput"]',
        dlState:'.inputField[name="olsInput"]',
        dlExpire:'.inputField[name="oldInput"]',
        license: '.inputField[name="licInput"]',
        licenseSt: '.inputField[name="lisInput"]',
        licenseExpire: '.inputField[name="lidInput"]',
        warrantId: '.inputField[name="widInput"]',
        reasonCancel: '.inputField[name="resInput"]',
        dateCancel: '.inputField[name="datInput"]',
        submit: '#saveBtn',
        clear: '#clearBtn',
        burger: '.bm-burger-button',
        enterWanted: '#outerContainer > div:nth-child(1) > div.bm-menu-wrap > div.bm-menu > nav > a:nth-child(2) > p',
        modifyWanted: '#outerContainer > div:nth-child(1) > div.bm-menu-wrap > div.bm-menu > nav > a:nth-child(3) > p',
        cancelWanted: '#outerContainer > div:nth-child(1) > div.bm-menu-wrap > div.bm-menu > nav > a:nth-child(4) > p',
        

    }

}
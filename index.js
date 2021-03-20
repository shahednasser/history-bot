const twitterClient = require('./init')
const axios = require('axios')

axios.get('http://history.muffinlabs.com/date')
    .then(response => {
    const data = response.data.data ? response.data.data : {}
    let tweet
    if (data.Events && data.Events.length) {
        //tweet the first event in the array
        tweet = 'Year ' + data.Events[0].year + ' - ' + data.Events[0].text
    } else {
        tweet = 'Nothing happened today :)'
    }

    twitterClient.tweets.statusesUpdate({
        status: tweet
    }).then (response => {
        console.log("Tweeted!", response)
    }).catch(err => {
        console.error(err)
    })
}).catch (err => {
    console.error(err)
})
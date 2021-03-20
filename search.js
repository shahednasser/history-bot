const twitterClient = require('./init')

twitterClient.tweets.search({
    q: '#HistoryBot',
    result_type: 'recent', //get latest tweets with this hashtag
}).then ((response) => {
    if (response.statuses) {
        response.statuses.forEach((status) => {
            twitterClient.tweets.statusesRetweetById({
                id: status.id_str
            })
            .then ((resp) => console.log(resp))
            .catch ((err) => console.error(err))
        })
    }
}).catch ((err) => console.error(err))
const ELASTICSEARCH = require('elasticsearch')

const CLIENT = new ELASTICSEARCH.Client({
    host: 'localhost:9200',
    apiVersion: '5.0'
})

CLIENT.get({
    index: 'simpsons',
    type: "episode",
    id: 200,
    //  you can use both attr to filter what gets included or excluded
     _sourceExclude: [
         'video_url'
     ]
    // _sourceInclude: [ 'title']
}).then((resp) => {
    console.log (resp)
}).catch((err) => {
    console.log(err)
})
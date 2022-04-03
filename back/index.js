const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

app.get('/api/news', async (request, response) => {
    try {
        await client.connect();

        const database = client.db('perf-news')
        const news = database.collection('news')

        const cur = await news.find({}).toArray()
        
        response.send(cur);

    } finally {
        await client.close()
    }
    
})

app.listen(3001, () => console.log('service is started'))

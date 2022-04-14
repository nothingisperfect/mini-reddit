const { MongoClient, ObjectId } = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

const express = require('express');
const app = express();
const cors = require('cors');
const { request, response } = require("express");

app.use(cors())
app.use(express.json())

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

app.post('/api/news', async (request, response) => {
    try {
        await client.connect();

        const database = client.db('perf-news')
        const news = database.collection('news')

        await news.insertOne(request.body)

    } finally {
        await client.close()
    }
})

app.delete('/api/news/:id', async (request, response) => {
    try {
        await client.connect();

        const database = client.db('perf-news')
        const news = database.collection('news')

        await news.deleteOne({_id : ObjectId(request.params.id)})
        
    } finally {
        await client.close()
    }
})

app.listen(3001, () => console.log('service is started'))

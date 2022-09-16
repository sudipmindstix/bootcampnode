const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017'

const client = new MongoClient(url)
const database = 'youtube';

const getData = async ()=>{
    let result = await client.connect();
    let db = result.db(database)
    const collection = db.collection('videos')
    const response = await collection.find({}).toArray()
    console.log(response);
}

getData()
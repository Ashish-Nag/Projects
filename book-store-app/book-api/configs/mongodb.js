
const mongodb = require('mongodb');

// get url
const url = "mongodb+srv://test:test@cluster0.qfhn4.mongodb.net/anotherbookstore?retryWrites=true&w=majority"

// create mongodb client
const mongoClient = mongodb.MongoClient;

// connect to mongodb

exports.connect = () => {
    mongoClient.connect(url)
        .then((client) => {
            console.log("mongodb is connected");
        })
        .catch(err => { console.log(err) });
}
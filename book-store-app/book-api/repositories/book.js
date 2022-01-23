// step 1: import mongodb config/collection

const db = require('../configs/mongodb');

exports.getAll = (cb) => {
    // this funciton should only connect to the book repo created in our collection
    const collection = db.getCollection('book');

    collection.find().toArray()
        .then((books) => {
            cb(books); //* using a callback function because this is an asynchrounous process, therefore to resolve it, we need to use a callback or async await.
        })
        .catch((err) => {
            console.log(err);
        })
}

// In controller, methods should only take requests, forward and return response.

// import the repository
const repo = require('../repositories/book');

exports.getAll = (req, res) => {

    console.log("get all books method being called");
    // call the repo to get data before sending.
    repo.getAll((books) => {
        res.send(books);
    });
}

// In controller, methods should only take requests, forward and return response.

exports.getAll = (req, res) => {
    // call the repo to get data before sending.
    console.log("get all books method being called");
    res.send([]);
}
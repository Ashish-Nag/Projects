// * this is a route file using express

const express = require('express');
const controller = require('../controllers/book');

// creating the router
const router = express.Router();

// configure the path
// here we will match the path and call the controller
// Server -> Routing -> Controller -> Repositories-> DB

router.get('/', controller.getAll);

module.exports = router;
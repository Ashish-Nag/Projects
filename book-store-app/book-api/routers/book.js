// * this is a route file using express

const express = require('express');

// creating the router
const router = express.Router();

// configure the path
// here we will match the path and call the controller
// Server -> Routing -> Controller -> Repositories-> DB

router.get('/', controllerCode);

module.exports = router;
const express = require('express');

// cross origin resource sharing
const cors = require('cors');
const bookRoutes = require('./routers/book');
const mongodb = require('./configs/mongodb');
const server = express();

server.get('', (req, res) => {
    res.send('home display');
});

server.use(cors("*"));
server.use('/api/book', bookRoutes);

// connect to mongo db before listening on a port for requests.
mongodb.connect();

server.listen(300, () => {
    console.log("server listening on port 300");
});
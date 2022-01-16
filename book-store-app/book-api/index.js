const express = require('express');
const bookRoutes = require('./routers/book');

const server = express();

server.get('', (req, res) => {
    res.send('home display');
});

server.use('/api/book', bookRoutes);

server.listen(300, () => {
    console.log("server listening on port 300");
});
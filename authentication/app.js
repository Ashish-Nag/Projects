
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const { requireAuth, checkUser } = require('./middlewares/authMiddleware');
const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://test:test@cluster0.qfhn4.mongodb.net/Authentication?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', requireAuth, (req, res) => res.render('smoothies'));
app.use(authRoutes);

// Cookies 

app.get('/setcookies', (req, res) => {

    res.cookie('newUser', false);
    res.cookie('isEmployee', true, { maxAge: 1000 * 60, secure: true });
    res.cookie('lamba', true);
    // Secure option ensures that the cookie will only be set when we have a secure connection (https connection) 
    // The maxAge property of cookie ensures that the cookie won't expire until the maxAge time is reached, regardless of sessions.

    res.send("You created cookie");
})

app.get('/readcookies', (req, res) => {
    const cookies = req.cookies;
    console.log(cookies);

    res.json(cookies);
})
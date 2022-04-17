const User = require('../models/user');
const jwt = require('jsonwebtoken');


// Handle Errors

const handleErrors = (err) => {

    let error = { email: '', password: '' };

    if (err.message == "Incorrect Email") {
        error.email = "That email is not registered";;
    }

    if (err.message == 'Incorrect Password') {
        error.password = "Password is Incorrect";
    }
    // Validation Error
    if (err.message.includes('user validation failed')) {
        console.log(Object.values(err.errors));
    }

    return error;

}

// Crete token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, 'secret', {
        expiresIn: maxAge
    });
}
module.exports.signup_get = (req, res) => {
    res.render('signup');
}
module.exports.signup_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.create({ email, password });
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(201).json({ user: user._id });
    } catch (e) {
        const error = handleErrors(e);
        res.staus(400).json({ msg: "something went wrong" })
    }
}
module.exports.login_get = (req, res) => {
    res.render('login');
}
module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json({ user: user._id });

    } catch (error) {
        const errors = handleErrors(error);
        res.status(400).json({ errors });
    }
}

module.exports.logout = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/login');
}
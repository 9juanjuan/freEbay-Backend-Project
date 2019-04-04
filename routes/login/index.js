

// const routes = require('../index')
const login = require('express').Router();
// const all = require('./all');
// const single = require('./single');


const User = require('../../models/users');
// Get a list of all users

login.get('/login', async (req, res) => {
    const allUsers = await User.getAll();
    console.log(allUsers);
    res.status(allUsers);
});


// Get a single user, based on their ID

module.exports = login;


// const routes = require('../index')
const dashboard = require('express').Router();
// const all = require('./all');
// const single = require('./single');


const User = require('../../models/users');
// Get a list of all users

dashboard.get('/dashboard', async (req, res) => {
    const allUsers = await User.getAll();
    console.log(allUsers);
    res.send(allUsers);
});


// Get a single user, based on their ID

module.exports = dashboard;
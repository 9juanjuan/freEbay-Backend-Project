

const routes = require('express').Router();

const User = require('../models/users');

// Let's create some routes...
const login = require('./login/index')
// const users = require('./users');
// const inventory = require('./inventory');
// const cart = require('./cart');
// const claimed = require('./claimed');

// // Let's define some routes and their associated handlers...
routes.use('/login', login);
// routes.use('/login', users);
// routes.use('/dashboard', inventory);
// routes.use('/posted', cart)
// routes.use('/claimed', claimed);

// Let's set a default route...
routes.get('/', (req, res) => {
    console.log('help me');
    res.status(200).json({ message: 'Connected!' });
});

routes.get('/login', async (req, res) => {
    const allUsers = await User.getAll();
    console.log(allUsers);
    res.send(allUsers);
});

// Redudant ellipsis...
module.exports = routes;
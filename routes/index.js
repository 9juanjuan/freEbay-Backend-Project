const routes = require('express').Router();

// Let's create some routes...
const users = require('./users');
const inventory = require('./inventory');
const cart = require('./cart');
const claimed = require('./claimed');

// Let's define some routes and their associated handlers...
routes.use('/users', users);
routes.use('/inventory', inventory);
routes.use('/cart', cart)
routes.use('/claimed', claimed);

// Let's set a default route...
routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
});

// Redudant ellipsis...
module.exports = routes;
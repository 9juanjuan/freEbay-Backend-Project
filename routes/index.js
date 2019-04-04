

const routes = require('express').Router();

const User = require('../models/users');

// Let's create some routes...
const login = require('./login/index')
const dashboard = require('./dashboard/index')
// const users = require('./users');
// const inventory = require('./inventory');
// const cart = require('./cart');
// const claimed = require('./claimed');


// // Let's define some routes and their associated handlers...
routes.use('/login', login);
routes.use('/dashboard', dashboard)
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
    console.log('getting login form');
    res.render('login-form', {
        locals: {
            email: '',
            message: ''
        }
    })
});

routes.get('/dashboard', async (req, res) => {
    res.render('dashboard', {
        locals: {
            // email: '',
            // message: ''
        }
    })
});


routes.post('/login', async (req, res) => {
    // console.log(req.body.email);
    console.log(req)
    console.log(`request is ${req.body}`);
    // res.send('No soup for you');
    // TO-DO: Check password for real. :)

    const theUser = await User.getByEmail(req.body.email);
    console.log(theUser)
    theUser.setPassword("password");
    await theUser.save();
    const passwordIsCorrect = theUser.checkPassword(req.body.password);
    if (passwordIsCorrect) {
        // Save the user's id to the session.
        req.session.user = theUser.id;
        // Make sure the session is saved before we redirect
        req.session.save(() => {
            res.redirect('/dashboard');
        });
    } else {
        // Send the form back, but with the email already filled out. 
        res.render('login-form', {
            locals: {
                email: req.body.email,
                message: 'Password incorrect. Please try again.'
            }
        });
    }
});


const controller = require('../models/controller')


// Redudant ellipsis...
module.exports = routes;
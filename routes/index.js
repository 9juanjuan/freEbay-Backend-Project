

const routes = require('express').Router();

const User = require('../models/users');
const Inventory = require('../models/inventory')
const Selling = require('../models/selling')
const Claimed = require('../models/claimed')

// Let's create some routes...
const login = require('./login/index')
const dashboard = require('./dashboard/index')
const claimer = require('./claimed/index')
// const users = require('./users');
// const inventory = require('./inventory');
// const cart = require('./cart');
// const claimed = require('./claimed');


// // Let's define some routes and their associated handlers...
routes.use('/login', login);
routes.use('/dashboard', dashboard)
routes.use('/claimed', claimer)
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


const escapeHtml= require('../utils')

routes.post('/login', async (req, res) => {
    // TO-DO: Check password for real. :)
    
    const theEmail= escapeHtml(req.body.email);
    const thePassword = escapeHtml(req.body.password);

    const theUser = await User.getByEmail(theEmail);
    console.log(theUser)
    theUser.setPassword("password");
    await theUser.save();
    const passwordIsCorrect = theUser.checkPassword(thePassword);
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

routes.get('/dashboard', async (req, res) => {
    const theInventory = await Inventory.getAll();
    const theUser = await User.getById(req.session.user);
    const sellingArray = await Selling.getAll();
    // const sellingArray = await Selling.getAll();

    // console.log(req.session.user)
    // await theUser.save();
    res.render('dashboard', {
        locals: {
            firstName: theUser.firstName,
            inventory: theInventory,
            item:sellingArray
        }
    });
});

routes.post('/dashboard', async (req, res) => {
    const theInventory = await Inventory.getAll();
    const theUser = await User.getById(req.session.user);
    await Selling.postNewItem(req.body.itemName, req.body.category, req.body.content);
    const selling = new Selling(1, req.body.itemName, req.body.category, req.body.content)
    const sellingArray = await Selling.getAll();
    // console.log(sellingArray)
    // sellingArray.forEach(post => {
    //     return
    // });
    // console.log(sellingArray);



    if (selling) {
        res.render('dashboard', {
            locals: {
                firstName: theUser.firstName,
                inventory: theInventory,
                item: sellingArray
            }
        });
        } else {
            res.send('failure')
        }
});

routes.get('/dashboard'), async (req,res) => {
    // console.log(req.body);
    console.log(req.body.id);
    console.log('00000000000000000000000000000')
    // const theInventory = await Inventory.getAll();
    // const theUser = await User.getById(req.session.user);
    // const sellingArray = await Selling.getAll();
    
res.redirect('/claimed')
    // res.send('holy molee')
    // res.render('claimed', {
    //     locals: {
    // //         item:sellingArray

    //     }
    // })



}


// routes.post('/claimed', async (req, res) => {
//     console.log('kdfjfrjfjifroifofjorjofjfijfi')
//     // console.log(req)
//     console.log(req.body.id)
//     console.log('121111111111111111111111111111')
//     const claim = await Inventory.getOne(req.body.id)
//     console.log(claim)
//     console.log('kdfjfrjfjifroifofjorjofjfijfi')

//     claim.claimed(req.body.itemName, req.body.category, req.body.price, this.content)
//     const claimIt = new Claimed(1, req.body.itemName, req.body.category, req.body.price, req.body.content)
//     console.log(claimIt)
//     console.log('kdfjfrjfjifroifofjorjofjfijfi')

//     const claimedInventory = await claimIt.getAll()
// res.send('yeah you did')
//     // res.render('/claimed', {
//     //     inventory: claimedInventory


//     // })



// })


const controller = require('../models/controller')


// Redudant ellipsis...
module.exports = routes;
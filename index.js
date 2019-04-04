const express = require('express'); // Bring in the express library.
const app = express();              // Create a new express app.
const es6Renderer= require('express-es6-template-engine');
// Require my session and session storage
//This module lets express track users as they go from page to page.
const session = require('express-session');

//Import the session storage module, and wire it up to the session module
const FileStore = require('session-file-store')(session);

// tell express to use the session modules
app.use(session({
    store: new FileStore(),// No options for now.
    secret: 'sjd9j9js9djsijdinsjnajfjj'
}));

const port = 3000;
const Inventory = require('./models/inventory');
const User = require('./models/user');
const Claimed= require('./models/claimed');
const Cart = require ('./models/cart')

app.engine('html', es6Renderer); // introduce express to es6renderer, speaks html
app.set('views', 'views');
app.set('view engine', 'html')// tell express to use as its view engine the thing that speaks html
// Second argument is the directory name

//Configure express to use the built in middleware 
// that can deal with form data.
app.use(express.urlencoded({extended:true}));


// Import my model class
app.get('/login', async (req , res) => {
});
    // res.send('this is the login form');
// require my session and session storage modules
// This module lets express track users
// as they go from page to page.
const session = require('express-session');

// Import the session storage module, and wire it up
// to the session module.
const FileStore = require('session-file-store')(session);






app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});
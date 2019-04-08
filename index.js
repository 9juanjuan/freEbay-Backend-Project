require('dotenv').config();




const express = require('express'); // Bring in the express library.
const app = express();              // Create a new express app.



const helmet = require('helmet');
app.use(helmet());


const es6Renderer= require('express-es6-template-engine');
// Require my session and session storage
//This module lets express track users as they go from page to page.
const session = require('express-session');






app.use(express.urlencoded({extended:true}));

const routes = require('./routes');

//Import the session storage module, and wire it up to the session module
const FileStore = require('session-file-store')(session);
// const S3KRET = require('./config');

// tell express to use the session modules
app.use(session({
    store: new FileStore(),// No options for now.
    secret: process.env.SESSION_SECRET
}));

const port = process.env.PORT;


app.engine('html', es6Renderer); // introduce express to es6renderer, speaks html
app.set('views', 'views');
app.set('view engine', 'html')// tell express to use as its view engine the thing that speaks html
// Second argument is the directory name

// Configure express to use the built in middleware 
// that can deal with form data.




// Import my model class
// app.get('/login', async (req , res) => {
    //     res.send('this is the login form');
    // });
// require my session and session storage modules
// This module lets express track users
// as they go from page to page.

app.use('/', routes);

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});
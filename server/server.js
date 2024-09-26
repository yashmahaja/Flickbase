const express = require('express');
const app = express();
require('dotenv').config();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');

const routes = require('./routes');

const { handleError, convertToApiError } = require('./middleware/apierror');

const mongoUri = `mongodb+srv://yashmahajan0521:39fUsO9BzIK74Vxx@cluster0.14hmoc5.mongodb.net/flickbase?retryWrites=true&w=majority`
mongoose.connect(mongoUri);



const passport = require('passport');
const {jwtStrategy} = require('./middleware/passport')
// PARSING
app.use(bodyParser.json())


// SANITIZE
app.use(xss());
app.use(mongoSanitize());


/// PASSPORT

app.use(passport.initialize());
passport.use('jwt',jwtStrategy);

/// routes
app.use('/api',routes)


/// error handling
app.use(convertToApiError)
app.use((err,req,res,next)=>{
    handleError(err,res)
})

const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
});
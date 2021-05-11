const express = require('express');
const app = express();
const dotenv = require('dotenv');   
const mongoose = require('mongoose');


//  Import Routes
const authRoute = require('./routes/auth');

dotenv.config();

//Connect to DB uses recommended parser
mongoose.connect(process.env.DB_CONNECT,
{ useNewUrlParser: true, useUnifiedTopology: true  },

() => console.log('connected to DB')) ;

//body-parser is depreciated
app.use(express.json());


app.use('/api/user', authRoute);


app.listen(3000,() => console.log ('Server is up and running'));    

/*@BASIC REQUIRES@*/
require('dotenv').config();
const express  =  require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

const cors = require('cors');
app.use(cors());
/*@CONFIGURATIONS@*/
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const apiRouter = require('./routes/api');
app.use('/api', apiRouter);
/*@INIT@*/
app.listen( 3000||process.env.PORT , ()=>{
    console.log("LISTO")
});

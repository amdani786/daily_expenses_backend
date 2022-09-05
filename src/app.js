require('./config/config');
require('./api/db/conn');
// const apiRouter = require('./api/routes/api')

const express = require('express');
const cors = require('cors');

var app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
//use routes of apis
//Route Prefixes
app.use('/api',require('./api/routes/api'));


app.listen(process.env.PORT, () => {
    console.log(`server running at port: ${process.env.PORT}`);
})

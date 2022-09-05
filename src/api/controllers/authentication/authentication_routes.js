const app = require('express')();
const authentication = require('./authentication');

app.post('/register',authentication.register);
app.post('/login',authentication.login); 
app.get('/getUsers',authentication.getUsers);   

module.exports = app;

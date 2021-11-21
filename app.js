const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Users = require('./model/users');
const userRoute = require('./api/routes/users');
const createUser = require('./api/routes/createuser')
const updatePassword = require('./api/routes/updatepassword')
const deleteUser = require('./api/routes/deleteuser');

app.use(express.json());
app.use(express.static('views'));
app.use('/user', userRoute);
app.use('/create', createUser);
app.use('/update', updatePassword);
app.use('/delete', deleteUser);

mongoose.connect('mongodb://127.0.0.1:27017/restapi', { useNewUrlParser: true});

const db = mongoose.connection

db.on('error',() => console.error(error));
db.once('open', () => console.log('DB connected'));

app.listen(3000)
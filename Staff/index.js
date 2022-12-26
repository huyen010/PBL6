const Joi = require('joi');
require('dotenv').config();
var cors = require('cors')

var express = require('express');
var app = express();
// let corsOptions = {
//   origin : ['http://206.189.146.194:3000','http://127.0.0.1:4040','http://206.189.146.194:3002'],
// }
app.use(cors())

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
const mongoose = require('mongoose');
// echo redis errors to the console
const http = require('http').Server(app);

const staff = require('./Route/Staff');



mongoose.connect('mongodb+srv://pnquang:quang123123a@cluster0.eenmlxn.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));
app.use(express.json());

app.use('/api/v1/cms/staff', staff);

const port = process.env.PORT || 3001;
http.listen(port, () => console.log('Socket listening on port...' + port));
const Joi = require('joi');
require('dotenv').config();
var cors = require('cors')

var express = require('express');
var app = express();

app.use(cors())


const mongoose = require('mongoose');
const http = require('http').Server(app);

const delivery = require('./Route/Delivery');



mongoose.connect('mongodb+srv://pnquang:quang123123a@cluster0.eenmlxn.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));
app.use(express.json());

app.use('/api/v1/cms/deliveries', delivery);

const port = process.env.PORT || 3003;
http.listen(port, () => console.log('Socket listening on port...' + port));
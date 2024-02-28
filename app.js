const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const routeModerate = require('./route/moderate')


// connection to database using mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>console.log("connection successed"))
.catch(()=>console.log("connection failed"));
//


const app= express();

app.use(express.json());

app.use('/api/moderation/predict',routeModerate)

module.exports = app;

const express = require('express');
const mongoose = require('mongoose')

const routeModerate = require('./route/moderate')


// connection to database using mongoose
mongoose.connect("mongodb+srv://Fadel:Errami2001@cluster0.8gdji4y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>console.log("connection successed"))
.catch(()=>console.log("connection failed"));
//


const app= express();

app.use(express.json());

app.use('/api/moderation/predict',routeModerate)

module.exports = app;

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/index').uri;

//initializes express app
const app = express();

//body-parser dependency initialization
app.use(bodyParser.json());

//connect to db with mongoose
mongoose.connect(db)
.then(()=> console.log('Connected to stock-db'))
.catch((err)=> console.log(err));

//initialize port 
const port = process.env.PORT || 8080; 

app.listen(port, () => console.log('Listening on port ' + port));
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const routes = require('./routes/index');

require('dotenv').config(); 

//initializes express app
const app = express();

//body-parser middleware initialization
app.use(express.json());


const db = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-hgehl.mongodb.net/test?retryWrites=true&w=majority`;

//connect to db with mongoose
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(()=> console.log('Connected to stock-db'))
.catch((err)=> console.log(err));

//initialize passport
app.use(passport.initialize());

//Routes Redirect
routes(app);

//default endpoint
app.get('*', (req, res) => res.status(200).send({
  'message': 'default',
}));


//initialize port 
const port = process.env.PORT || 8080; 

app.listen(port, () => console.log('Listening on port ' + port));
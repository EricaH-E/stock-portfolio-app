const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const cors  = require('cors');

require('dotenv').config(); 

//initializes express app
const app = express();

app.use(cors());

//body-parser middleware initialization
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

//initialize passport
app.use(passport.initialize());

//mongodb atlas uri url
const db = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-hgehl.mongodb.net/test?retryWrites=true&w=majority`;

//connect to db with mongoose
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(()=> console.log('Connected to stock-db'))
.catch((err)=> console.log(err));



//Routes Redirect
routes(app);

//default endpoint
app.get('*', (req, res) => res.status(200).send({
  'message': 'default',
}));


//initialize port 
const port = process.env.PORT || 3001; 

app.listen(port, () => console.log('Listening on port ' + port));
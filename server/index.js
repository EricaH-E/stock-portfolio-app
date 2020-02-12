const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/index').uri;
const routes = require('./routes/index');

//initializes express app
const app = express();

//body-parser middleware initialization
app.use(bodyParser.json());


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
const port = process.env.PORT || 8080; 

app.listen(port, () => console.log('Listening on port ' + port));
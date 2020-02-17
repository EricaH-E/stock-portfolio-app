const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const routes = require('./routes/index');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

//initializes express app
const app = express();

app.use(cors());

//body-parser middleware initialization
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//initialize passport
app.use(passport.initialize());

//mongodb atlas uri url
const db = process.env.MONGODB_URI;

//connect to db with mongoose
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => console.log('Connected to stock-db'))
  .catch((err) => console.log(err));



//Routes Redirect
// routes(app);

//default endpoint
// app.get('*', (req, res) => res.status(200).send({
//   'message': 'default',
// }));

app.use('/api', routes);
// production configuration 
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//initialize port 
const port = process.env.PORT || 3001;

app.listen(port, () => console.log('Listening on port ' + port));


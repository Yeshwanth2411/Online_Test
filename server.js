const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const quiz = require('./routes/api/quiz');

//Express initialization
const app = express();

//bodyParser Middleware
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
	.connect(db, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('MongoDB Connected...'))
	.catch((err) => console.log(err));

//use Routes
app.use('/api/quiz', quiz);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Serevr started on port ${port}`));

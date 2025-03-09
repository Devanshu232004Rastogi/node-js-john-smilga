const express = require("express");

const app = express();
app.use(express.static(`${__dirname}/methods-public`));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const people = require('./routes/people')
const login = require('./routes/Auth')

app.use('/api/people' , people)

app.use('/login',login)
app.listen(5000);

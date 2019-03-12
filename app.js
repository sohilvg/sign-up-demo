
const express = require('express');
const app = express();
const port = 8000;
const user = require('./routes/routes.js');


const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(user);


app.listen(port,() => console.log('listen port 8000'));

const express = require('express');
const app = express();
const port = 8500;
const user = require('./routes/publicRoutes.js');


const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(user);


app.listen(port,() => console.log('listen port 8500'));
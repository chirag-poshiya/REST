const express = require('express');
const feedRoute = require('./routes/feed');

const app = express();

app.use('/feed', feedRoute);

app.listen(8080);
const express = require('express');
const path = require('path');
const members = require('./Members');
const logger = require('./middleware/logger');

// create app server with express
const app = express();

// init middleware
//app.use(logger);

// middleware body Parser
app.use(express.json());

app.use(express.urlencoded({extends:false}));

// for static website
app.use(express.static(path.join(__dirname,'public')));

//member API Routes
app.use('/api/members', require('./routes/api/members'));

PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log('server started on port '+ PORT));
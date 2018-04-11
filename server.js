'use strict';
//Modules
const express = require('express');
const app = express();
const config = require('./configuration/configuration');
const boot = require('./helpers/boot');
var taskArray = [];

var PORT = process.env.PORT || config.SERVER.PORT;

app.listen(PORT, function () {
    boot(app, taskArray);
});



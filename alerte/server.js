// Use strict mode
'use strict';

// Load usefull expressjs and nodejs objects / modules
const express = require('express');
const path = require('path');

// DB
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./alerte/myDB.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to SQlite database.');
});

db.serialize(function () {
    db.run("CREATE TABLE IF NOT EXISTS QCM (id INTEGER PRIMARY KEY, r1 Reponse)")
    db.run("CREATE TABLE IF NOT EXISTS Reponse (id INTEGER PRIMARY KEY, libelle VARCHAR )")
})


// Create our application
const app = express();

// Load and register our REST API
const api = require('./api/api');
const {OPEN_CREATE} = require("sqlite3");
app.use('/api', api);

// Minimum routing: serve static content from the html directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../__common-logos__')));

// You can then add whatever routing code you need

// This module is exported and served by the main server.js located
// at the root of this set of projects. You can access it by lanching the main
// server and visiting http(s)://127.0.0.1:8080/name_of_you_project/ (if on a local server)
// or more generally: http(s)://server_name:port/name_of_you_project/
module.exports = app;

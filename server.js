'use strict';

const express = require('express');

const app = express();
const PORT = 8080;

app.get('/', function(req, res){
	res.send('hello planet');
})

app.listen(PORT, function(err){
    if (err) {
	console.log('error', err);
    }	
    console.log("listening on:" + PORT);
})	



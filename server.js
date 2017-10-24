const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'mrmaille', 
});

var productPurchased = [];

connection.connect();

//connect to the mysql database and pull the information from the Products database to display to the user
connection.query('SELECT ItemID, ProductName, Price FROM Products', function(err, result){
	if(err) console.log(err);

	for(var i = 0; i < result.length; i++){
		
	}
	console.log(result);

	
});



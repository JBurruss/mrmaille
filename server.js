const mysql = require('mysql');
const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const connection = mysql.createConnection({
	host: 'bmsyhziszmhf61g1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'n993vg4k7qnay5wo',
	password: 'ra89cptmc4xzjixc',
	database: 'su0kichwont6vfpg', 
});

const PORT = process.env.port || 3001;
var productPurchased = [];

connection.connect(function(error){

	if(!!error){
		console.log('Error');
	}else{
		console.log('Connected')
	}
});

app.get('/', function(req, resp){
connection.query('SELECT ItemID, ProductName, Price FROM Products', function(err, result){
	if(err){
		console.log(err);
	} else{
		console.log('Success');		
 		console.log(result);
	}		
})
})
app.listen(PORT, function() { console.log("Running")});
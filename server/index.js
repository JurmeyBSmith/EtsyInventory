const express = require ('express');
const app = express();
const bodyparser = require('body-parser');
const axios = require('axios');
const mysql = require('mysql');
const etsyjs = require('etsy-js');
const client = etsyjs.client('5hzhlvgzn5');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
const port = 5000;
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'jeremy',
    password: 'Password',
    port: '8886',
    database: 'etsy-inventory',
})
//routes here

app.get('/', (req, res) => {
  
  console.log("You made it!");
  res.send(
    get_shop('https://openapi.etsy.com/v2/shops/listing/951189870?api_key=2c9dm6sagvlgjxv6gr0l35jk') + "Fuck you!"
    );
});

//Creat econnection
connection.connect((err) => {
    console.log('Are we even running this?')
    if (err) {
      console.log('Database error:', err);
      throw err
    } else {
      console.log('You are now connected...');
    }
  });

function get_shop(uri) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: uri
    })
      .then(response => {
        console.log("Response: ", response.data.results);
        return response;
      }).catch(err => {
        console.log("Error", err)
        reject(err);
      })
  })
}


//localhost:5000
app.listen(5000);


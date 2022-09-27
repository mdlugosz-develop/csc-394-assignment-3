const express = require('express');
const path = require('path');
var client  = require('./dataBaseConfig');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

// sendFile will go here
app.get('/', function (request, response, next){
    const query = `SELECT VERSION()`;

    client.query(query, (err, data) => {
        if (err) {
            throw error;
        }
        {
            response.render('index', {data: data.rows[0]});
        }
        client.end();
    
    });

})

app.listen(port);
console.log('Server started at http://localhost:' + port);


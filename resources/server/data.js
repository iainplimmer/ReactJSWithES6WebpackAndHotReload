// To start, in terminal, run the following command $ node index.js

//  Setup the express application first
var express = require('express');
var app = express();

//  Set any constants
const port = 3333;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


//  Returns a route that emit's the data for the bookstore
app.get('/', function (req, res) {

    var books = [
        {
            "BookId": 103,
            "BookName": "The Damned United",
            "ISBN": "isbn-99921-58-10-7",
            "ReleaseDate": "May 21, 2016",
            "Price": 9.99,
            "StarRating": 3
        },
        {
            "BookId": 102,
            "BookName": "The Blade Itself",
            "ISBN": "isbn-23431-28-10-7",
            "ReleaseDate": "April 1, 2010",
            "Price": 8.99,
            "StarRating": 3
        },
        {
            "BookId": 101,
            "BookName": "A Feast for Crows",
            "ISBN": "isbn-54561-54-12-4",
            "ReleaseDate": "January 12, 2005",
            "Price": 4.99,
            "StarRating": 4
        },
        {
            "BookId": 104,
            "BookName": "Harry Potter and the Deathly Hallows",
            "ISBN": "isbn-848741-65-22-2",
            "ReleaseDate": "January 1, 2001",
            "Price": 4.99,
            "StarRating": 4
        }
    ];                        

    res.send(books)                     

})

app.listen(port, function () {
  console.log('Database started on port ' + port);
});
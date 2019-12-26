//import express module
let express = require("express");
//import body-parser module
let bodyparser = require("body-parser");
//import cors module
let cors = require("cors");
//create the rest object
let app = express();
//set the json as MIME Type
app.use(bodyparser.json());
//read the post parameters
app.use(bodyparser.urlencoded({extended:false}));
//use the cors module
app.use( cors() );
//use the angular module

//use the nodejs module
app.use("/node",require("./nodejs/nodejs"));
//use the feedback module
//assign the port no
app.listen(8080);
console.log("server listening the port no.8080");
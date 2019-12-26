//import express module
let express = require("express");
//import mongodb module
let mongodb = require("mongodb");
//create the client
let nareshIT = mongodb.MongoClient;
//export module
module.exports = express.Router().get("/",(req,res)=>{
    nareshIT.connect("mongodb://localhost:27017/testdb",
                                                (err,db)=>{
        if(err)
            throw err;
        else{
            db.collection("nodejs").find()
                                .toArray((err,array)=>{
                if(err)
                    throw err;
                else
                    res.send(array);
            });
        }
    });
});
const express = require("express");


const app = express();





app.get("/health-check",(req,res) => {
    res.status(200).json({
        message:"hellow from Server"
    })
})

module.exports = app;

require('dotenv').config()

const express = require("express");
const app = express();
const port = 4000;

// create the request
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// another one
app.get("/twitter", (req, res) => {
    res.send("Hello Omkar!");
  });

app.get("/login",(req,res) =>{
    res.send("<h1> Omkar Nimase & Prvin r best friend</h1>")
});

app.get("/youtube",(req,res) =>{
    res.send("<h2>Omkar with Pravin </h2>")
})


// if request is send successfuloly then listen is work
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});

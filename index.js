//import express  from 'express';
//import bodyParser from 'body-parser';
const express = require('express');
const bodyParser = require('body-parser');
const usersRoutes = require("./routes/users.js")

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes); 

//create routes take the path where the request is made and a callback
//call back takes the request and the response

app.get('/', (req,res)=>{
    res.send('Hello From Homepage');
});

app.listen(PORT,()=>console.log(`Server started on port: http://localhost:${PORT}`));
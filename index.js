//un pequeño servidor con express para el backend de mi portafolio

const express = require('express');
const cors = require('cors');
const data= require('./data/proyectos.json');
const about= require('./data/about.json');

const port= process.env.port || 3000;

var app=express();
app.use(cors());

//configurar puerto de manera global
app.get('/proyectos',(req,res)=>{
    res.json(data)
})

app.get('/about',(req,res)=>{
    res.json(about)
})




app.listen(port,()=>{
    console.log(`listening port ${port} `)
})
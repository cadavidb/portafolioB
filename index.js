//un pequeño servidor con express para el backend de mi portafolio
const express = require('express');
const cors = require('cors');

const dataProyectos=require('./data/proyectos.json');
const dataAbout=require('./data/about.json');


var app=express()

//middleware

app.use(cors());

//set port 

const port= process.env.PORT || 3000;

app.get('/proyectos',(req,res)=>{

    res.json(dataProyectos)

})
app.get('/about',(req,res)=>{

    res.json(dataAbout)

})



app.listen(port,()=>{
    console.log(`listening port ${port}`)
})
//un pequeño servidor con express para el backend de mi portafolio

const express = require('express');
const cors = require('cors');

//data

const about=require('./data/about.json');
const proyectos=require('./data/proyectos.json');
var app= express();

// middleware

app.use(cors())


//set port 

const port= process.env.PORT || 3000;

// set routes



app.get('/about',(req,res)=>{

    res.json(about)

})
app.get('/proyectos',(req,res)=>{
    res.json(proyectos)
})





app.listen(port,()=>{
    console.log(`listening port ${port}`)
})
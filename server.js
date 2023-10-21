const express =require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/glen', (req,res) => {res.send("Hello Glen")});

app.listen(port, ()=>console.log("Listening"));
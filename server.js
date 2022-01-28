const express = require('express');
const app = express();
const Contenedor = require('./contenedor');
let visitas = 0
const producto = new Contenedor('./data.json')


app.get("/", (req, res) => {
    res.send('Nueva app desafio backend')
    
});

app.get("/productos", async (req, res) => {
    const data = await producto.getAll()
    res.send(JSON.stringify(data)) 
});

app.get("/productoRandom", async (req, res) => {
    const data = await producto.getAll()
    const rand = Math.floor(Math.random()*data.length);
    var rValue = data[rand];
    res.send(JSON.stringify(rValue))
})

app.get("/visitas", (req, res) => {
    visitas ++
    res.send(`Tiene ${visitas} visitas`)
})

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
})

server.on('err', (err) => {
    console.log(`Error: ${err}`);
})
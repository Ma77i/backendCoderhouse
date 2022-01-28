const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write('Hola nuevo server')
        res.end()
    }
    const hora = moment().format('HH')
    console.log(hora);
    const horaNum = Number(hora)

    if (horaNum > 7) {
        res.write('Buenos Dias')
        res.end()
    }
})

const PORT = process.env.PORT || 8080

server.listen(PORT)

console.log(`Escuchando en puerto ${PORT}`);
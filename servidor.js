const http = require("http");
const fs = require('fs')

function vaiVem(req, res) {

    const texto = fs.readFileSync("log.txt", 'utf-8');

    res.end(texto);
}

const servidor = http.createServer(vaiVem);

servidor.listen(8080, () => {
     console.log('Estou rodando na porta 8080')
})
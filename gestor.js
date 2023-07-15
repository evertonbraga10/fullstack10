const fs = require('fs')

const pacote = fs.readFileSync("package.json", 'utf-8');

const pacoteObjeto = JSON.parse(pacote)

console.log(pacoteObjeto.name, pacoteObjeto.version);

const texto = 'eu sou groot'

fs.writeFileSync('log.txt', texto)
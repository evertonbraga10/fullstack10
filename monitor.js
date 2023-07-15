const os = require('os')

function getMemolivre() {
    return os.freemem
}

module.exports = getMemolivre;
const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default:10,
        alias: 'l'
    }
}
const argv = require('yargs')
    .command('mostrar', 'muestra la tabla en la consola', opts)
    .command('crear', 'crea un archivo con la tabla', opts)
    .help()
    .argv
module.exports = {
    argv
}
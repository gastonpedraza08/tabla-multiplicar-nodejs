const argv = require('./config/yargs.js').argv
const {obtenerTabla} = require('./multiplicar.js')

let base = argv.b
let limite = argv.l
let accion = argv._[0]

obtenerTabla(base, limite, accion)
.then((nombre) => console.log(nombre))
.catch((err) => console.log(err))
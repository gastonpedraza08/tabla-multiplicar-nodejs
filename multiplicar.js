const fs = require('fs')
const colors = require('colors/safe');
let obtenerTabla = function (base, limite, accion){
    return new Promise( (resolve, reject) => {
        if(isNaN(base)){
            reject(`El valor ingresado no es un número.`)
            return
        }
        let str = ""
        for(let i=1; i<=limite; i++){
            str += `${base} * ${i} = ${base*i} \n`
        }
        let nombre = `tabla_del_${base}_hasta_el_${limite}`
        if(accion==="mostrar"){
            console.log(colors.green(str))
            resolve(nombre)
            return
        }else if(accion==="crear"){
            fs.writeFile(`tablas/${nombre}.txt`, str, (err) => {
                if(err) reject(err)
                else resolve("se ha creado el archivo: "+colors.green(nombre+".txt"))
            })
        }else{
            reject(new Error("valor ingresado no valido"))
        }
    })
}

module.exports = {
    obtenerTabla
}
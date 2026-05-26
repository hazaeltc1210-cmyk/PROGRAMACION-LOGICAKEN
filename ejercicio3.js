const numeroDeProductos = 25
const mensaje = "¿Hay más de 20 productos en stock?"
let respuesta = ""

if (numeroDeProductos > 20) {
    respuesta = "Sí"
} else {
    respuesta = "No"
}

console.log(mensaje)
console.log(respuesta)

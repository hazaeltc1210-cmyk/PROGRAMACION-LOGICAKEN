const numeroDeprouductos = 19
let mensaje = ""

if (numeroDeprouductos == 0) {
    mensaje = "Alerta, te quedaste sin productos"
} else if (numeroDeprouductos < 5) {
    mensaje = "Cuidado, te quedan pocos pruductos"
} else {
    mensaje = "Tienes Suficientes productos en stock"
}

console.log(mensaje)
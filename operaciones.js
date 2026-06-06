function suma (a, b) {
    return parseFloat (a) + parseFloat (b)
}
function resta (a, b) {
    return parseFloat (a) - parseFloat (b)
}
function multiplica (a, b) {
    return parseFloat (a) * parseFloat (b)
}
function divide (a, b) {
    if (parseFloat (b) === 0) {
        return("No se puede dividir por cero")
    }
    return parseFloat (a) / parseFloat (b)
}

function limpiar (num1, num2) {
    num1.value =""
    num2.value =""
}
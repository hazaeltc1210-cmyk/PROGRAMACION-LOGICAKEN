const numero_1 = 8
const numero_2 = 4 
const numero_3 = 3
const numero_4 = 5


const suma1 = suma (numero_1, numero_2)
console.log(`El promedio de ${numero_2} y ${numero_3} es: ${promedio(numero_2, numero_3)}`)
function suma(num1, num2) {
   return parseInt (num1) + parseInt(num2)
}

function promedio (num1, num2) {
    return (suma(num1, num2) / 2)
}


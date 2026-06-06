const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question ('ingrese un numero' , (num) => {
    const numero = parseInt (num)
    rl.question('ingrese otro numero', (num2) => {
        const numero2 = parseInt(num2)
        console.log(`La suma de ${numero} y ${numero2} es: ${numero + numero2}`)
        rl.close()
    })
})

function suma(num1, num2) {
    parseInt (num1) + parseInt(num2)
}
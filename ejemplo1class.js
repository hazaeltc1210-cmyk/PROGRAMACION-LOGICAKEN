//calcular la sumatorio de numeros de 1 al 7 
const numeros = [1 , 2, 3, 4, 5, 6, 7]
let total = 0

numeros.forEach(numero => {
    total = total + numero
})
console.log(total)
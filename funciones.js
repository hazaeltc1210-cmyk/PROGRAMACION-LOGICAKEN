const num1 = document.querySelector("#numero_1")
const num2 = document.querySelector("#numero_2")
const buttonSuma = document.querySelector
("#btnSuma")
const buttonResta = document.querySelector
("#btnResta")
const buttonMultiplica = document.querySelector
("#btnMultiplica")
const buttonDivide = document.querySelector
("#btnDivide")
const resultado = document.querySelector
("#resultado")

buttonSuma.addEventListener("click", () =>{
   const res = suma(num1.value, num2.value)
   resultado.textContent = res
   limpiar(num1, num2)
})

buttonResta.addEventListener("click", () =>{
   const res = resta(num1.value, num2.value)
   resultado.textContent = res
   limpiar(num1, num2)
})

buttonMultiplica.addEventListener("click", () =>{
   const res = multiplica(num1.value, num2.value)
   resultado.textContent = res
   limpiar(num1, num2)
})

buttonDivide.addEventListener("click", () =>{
   const res = divide(num1.value, num2.value)
   resultado.textContent = res
   limpiar(num1, num2)
})
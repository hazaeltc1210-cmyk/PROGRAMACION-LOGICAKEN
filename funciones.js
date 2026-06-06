const num1 = document.querySelector("#numero_1")
const num2 = document.querySelector("#numero_2")
const buttonSuma = document.querySelector
("#btnSuma")
const resultado = document.querySelector
("#resultado")

buttonSuma.addEventListener("click", () =>{
   const res = suma(num1.value, num2.value)
   resultado.textContent = res
   limpiar(num1, num2)
})

//tarea1: agregar eventos a los botones de resta, multiplicación y división, y mostrar el resultado en el elemento con id resultado. No olvidar limpiar los campos después de cada operación.
//tarea2: crear un archivo que se llame metodos.html, contendra unicamente un input de tipo numero y un boton que calculen: numero pares, impares y primos
//Que el resultado se muestre en un parrafo debajo del boton ejemplo:
//Fecha de entrega: jueves 11 de junio hasta las 11:59 pm
//1- clic al boton  ---> el numero es impar y primo 
//2- clic al boton  ---> el numero es impar y primo 
//3- clic al boton  ---> el numero es impar y primo 
//4- clic al boton  ---> el numero es impar y primo 
//5- clic al boton  ---> el numero es impar y primo 

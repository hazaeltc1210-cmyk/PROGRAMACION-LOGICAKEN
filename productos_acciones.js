const products = document.querySelector("#products")

let pesitos = new Intl.NumberFormat('es-MX',
    {
        style: 'currency',
        currency: 'MXN',
    }
); //aqui cometi un error puse = en ves de :, eso puede hacer que mi codigo se rompe 

document.addEventListener("DOMContentLoaded", e => {
    let productcRow= ``
    for (let index = 0; index < productosData.length; index++){
   productcRow += `
          <tr>
                <td>${productosData[index].id}</td>
                <td>${productosData[index].nombre}</td>
                <td>${pesitos.format(productosData[index].precio)}</td>
                <td>${productosData[index].categoria}</td>
                <td>${productosData[index].stock}</td>
            </tr>
            `
}
products.innerHTML = productcRow //agarra todo el texto conviertelo a html y agregalo a products <tr>
})//Todo el html dentro de javascrit 

// aqui lo definimos en el mismo ciclo 
//length tamaño maximo 

//Cual es el ciclo que mas me conviewe, for each, while, map 
/*los bucles siempre seran los misnis*/
//recuerda que javascript es sencillbe a mayusculas

/*
1- Agregar una columna llamada total de stock 
Total de stock = precio de producto * stock de producto 
si tengo 15 laptos y cada una vale 200 pesos multiplicar 

2-filtrar por categorias 
hay una opcion en javascrit que se llama filter 
*/ 
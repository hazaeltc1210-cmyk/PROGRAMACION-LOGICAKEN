const products = document.querySelector("#products");
const filtro = document.querySelector("#filtro");

const pesitos = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
});

function mostrarProductos(productos) {
  products.innerHTML = productos.map(producto => `
    <tr>
      <td>${producto.id}</td>
      <td>${producto.nombre}</td>
      <td>${pesitos.format(producto.precio)}</td>
      <td>${producto.categoria}</td>
      <td>${producto.stock}</td>
      <td>${pesitos.format(producto.precio * producto.stock)}</td>
    </tr>
  `).join("");
}

function filtrarProductos() {
  const categoria = filtro.value;

  const productosAMostrar = categoria === "todos"
    ? productosData
    : productosData.filter(producto => producto.categoria === categoria);

  mostrarProductos(productosAMostrar);
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarProductos(productosData);
});

filtro.addEventListener("change", filtrarProductos);
//Todo el html dentro de javascrit 

// aqui lo definimos en el mismo ciclo 
//length tamaño maximo 

//Cual es el ciclo que mas me conviewe, for each, while, map 
/*los bucles siempre seran los misnis*/
//recuerda que javascript es sencillbe a mayusculas

/*
1- Agregar una columna llamada total de stock 
Total de stock = precio de producto * stock de producto 
si tengo 15 laptos y cada una vale 200 pesos multiplicar */

//2-filtrar por categorias hay una opcion en javascrit que se llama "filter"//
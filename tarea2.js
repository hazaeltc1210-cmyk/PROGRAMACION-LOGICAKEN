// SISTEMA BÁSICO DE INVENTARIO PARA 3 PRODUCTOS

const producto1 = { nombre: "Laptop", precio: 15000, stock: 8 }
const producto2 = { nombre: "Mouse", precio: 300, stock: 25 }
const producto3 = { nombre: "Teclado", precio: 700, stock: 15 }

console.log("== SISTEMA BÁSICO DE INVENTARIO ==")

console.log(`Producto 1 registrado: ${producto1.nombre}`)
console.log(`Precio unitario del producto 1: $${producto1.precio}`)
console.log(`Unidades disponibles del producto 1: ${producto1.stock}`)

console.log(`Producto 2 registrado: ${producto2.nombre}`)
console.log(`Precio unitario del producto 2: $${producto2.precio}`)
console.log(`Unidades disponibles del producto 2: ${producto2.stock}`)

console.log(`Producto 3 registrado: ${producto3.nombre}`)
console.log(`Precio unitario del producto 3: $${producto3.precio}`)
console.log(`Unidades disponibles del producto 3: ${producto3.stock}`)

const valorTotal = (producto1.precio * producto1.stock) +
                   (producto2.precio * producto2.stock) +
                   (producto3.precio * producto3.stock)

console.log(`Valor total del inventario: $${valorTotal}`)

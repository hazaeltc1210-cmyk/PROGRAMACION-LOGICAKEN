const product_name = "cafe"
const product_price = 25.50
const product_stock = 7

let total_inventory = parseFloat(product_price) * parseFloat(product_stock)
total_inventory = total_inventory.toFixed(2)
const message = `== SISTEMA BASICO DE INVENTARIO ==\nproducto registrado: ${product_name} \nPrecio unitario: $${product_price}\nUnudades disponibles: ${product_stock}\nValor total del inventario: $${total_inventory}`
console.log(message)

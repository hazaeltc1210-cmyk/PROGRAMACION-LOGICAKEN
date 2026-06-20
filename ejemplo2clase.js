    const products = [
        {
            name :"cafe",
            price: 25.50,
            stock: 7
        },
        {
            name: "computadora",
            price: 250.50,
            stock: 7
        },
        {
            name: "pizarron",
            price: 125.50,
            stock: 7
        },
        {
            name: "Shampoo",
            price: 30,
            stock: 17
        }
    ]
    let total_inventory = 0
    let message =`== SISTEMA BASICO DE INVENTARIO==`
    products.forEach ((product, index) => {
    total_inventory = total_inventory + parseFloat(product.price) * parseFloat(product.stock)
    message = message + `\nProdcuto ${index + 1} registrado : ${product.name}\nPrecio unitario del producto ${index + 1}:
    $${product.price}\nUnidadesdisponibles del producto ${index + 1}: ${product.stock}\n`
    })

    console.log(message + `Valor total del inventario: $${total_inventory.toFixed(2)}`)
// Array global para guardar los productos
let carrito = [];

// Función para añadir productos al carrito
function anadir() {
    // Obtener los valores del input
    let nombre = document.getElementById('nombre').value.trim();
    let precio = parseFloat(document.getElementById('precio').value);

    // Crear objeto producto
    let producto = {
        nombre: nombre,
        precio: precio
    };

    // Añadir al carrito
    carrito.push(producto);

    // Limpiar inputs
    document.getElementById('nombre').value = "";
    document.getElementById('precio').value = "";
}

// Función para mostrar la factura
// Contenedor donde se mostrará la factura
const contenedorFactura = document.createElement('div');
contenedorFactura.id = "factura";
document.body.appendChild(contenedorFactura);

function factura(carrito) {
    if(carrito.length === 0) {
        contenedorFactura.innerHTML = "<p>El carrito está vacío.</p>";
        return;
    }

    let total = 0;
    let mensaje = "<h2>Factura</h2><ul>";
    
    carrito.forEach((producto) => {
        mensaje += `<li>${producto.nombre} - €${producto.precio.toFixed(2)}</li>`;
        total += producto.precio;
    });

    mensaje += `</ul><strong>Total: €${total.toFixed(2)}</strong>`;

    // Mostrar en la página
    contenedorFactura.innerHTML = mensaje;
}
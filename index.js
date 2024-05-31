// Espera a que el contenido del documento HTML esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
    // Obtener referencias a elementos HTML relevantes
    const iniciarCajaBtn = document.getElementById("iniciar-caja");
    const registrarVentaBtn = document.getElementById("registrar-venta");
    const procesarPagoBtn = document.getElementById("procesar-pago");
    const total = document.getElementById("total-ventas")
    const cerrarCaja = document.getElementById("cerrar-caja")
    const visor = document.getElementById("visor");


    // Variables para mantener el estado de la caja registradora y las ventas
    let cajaIniciada = false;
    let saldoCaja = 0;
    let totalVentas = 0;

    // Evento click para iniciar la caja registradora
    iniciarCajaBtn.addEventListener("click", function () {
        const montoInicial = parseInt(prompt("Ingrese su monto inicial!"));
        // Verificar si el monto inicial es un número válido y mayor o igual a cero
        if (!isNaN(montoInicial) && montoInicial >= 0) {
            saldoCaja = montoInicial; // Establecer el saldo de la caja
            cajaIniciada = true; // Marcar la caja como iniciada
            visor.textContent = "Su monto inicial es " + montoInicial; // Muestra el saldo del inicio de caja

        } else {
            visor.textContent = "Por favor ingresa un monto inicial válido."; // Error
        }
    });

    registrarVentaBtn.addEventListener("click", function () {
        // Verificar si la caja está iniciada
        if (!cajaIniciada) {
            visor.textContent = "Por favor inicia la caja registradora primero."; // Error
            return;
        }

        const costoProducto = parseInt(prompt("Ingrese el costo del producto."));
        // Verificar si el costo del producto es un número válido y mayor que cero
        if (!isNaN(costoProducto) && costoProducto > 0) {
            totalVentas += costoProducto; // Sumar el costo del producto al total de ventas
            visor.textContent = "Total de ventas del día: $" + totalVentas // Mostrar total de ventas
        } else {
            visor.textContent = "Por favor ingresa un costo de producto válido."; // Error
        }
    });

    // Evento click para procesar un pago
    procesarPagoBtn.addEventListener("click", function () {
        // Verificar si la caja está iniciada
        if (!cajaIniciada) {
            visor.textContent = "Por favor inicia la caja registradora primero."; // Error
            return;
        }

        const dineroRecibido = parseInt(prompt("Ingrese el dinero recibido."));
        // Verificar si el dinero recibido es un número válido y mayor o igual a cero
        if (!isNaN(dineroRecibido) && dineroRecibido >= 0) {
            const vuelto = dineroRecibido - totalVentas; // Calcular el vuelto
            // Verificar si hay suficiente dinero recibido para cubrir el total de ventas
            if (vuelto >= 0) {
                visor.textContent = "Vuelto: $" + vuelto; // Mostrar el vuelto
            } else {
                visor.textContent = "El dinero recibido es insuficiente.";
            }
        } else {
            visor.textContent = "Por favor ingresa un monto válido.";
        }
    });

    total.addEventListener("click", function () {
        saldoCaja += totalVentas; // Sumar el total de ventas al saldo de la caja
        visor.textContent = "El total de ventas es $" + totalVentas // Mostrar el total de ventas
    })

    cerrarCaja.addEventListener("click", function () {
        visor.textContent = "El total de la caja es $" + saldoCaja // Mostrar el saldo de la caja para poder cerrarla!
        saldoCaja = 0;
        totalVentas = 0;
        cajaIniciada = false
    })
});
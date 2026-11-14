
// Variables constantes
const PRECIO_ENTRADA = 20;
const CUPOS_INICIALES = 50;

const DESCUENTO_ESTUDIANTE = 0.30;
const DESCUENTO_DOCENTE = 0.15;
const DESCUENTO_GENERAL = 0;

const MAX_ENTRADAS = 5;

// Variables modificables
let cuposDisponibles = CUPOS_INICIALES;
let totalEntradasVendidas = 0;
let ingresosAcumulados = 0;
let comprasRealizadas = 0;
let opcion;

//Menu
do {
    opcion = prompt(
        "SISTEMA INNOVA ESPE 2026\n\n" +
        "1. Comprar entradas\n" +
        "2. Consultar cupos disponibles\n" +
        "3. Consultar ingresos acumulados\n" +
        "4. Salir\n\n" +
        "Seleccione una opcion:"
    );

    // Casos  switch

    switch (opcion) {
        case "1":
            if (cuposDisponibles === 0) {
                alert("Evento agotado. No es posible realizar mas compras.");
                break;
            }

            // COMPRA DE ENTRADAS
            let nombre;
            do {
                const entrada = prompt("Ingrese el nombre del comprador:");

                if (entrada === null) {
                    nombre = "";
                } else {
                    nombre = entrada.trim();
                }
                if (nombre === "") {
                    alert("El nombre es obligatorio.");
                } else if (!isNaN(nombre)) { // !isNaN -> true si el texto es un numero
                    alert("El nombre no puede ser un numero.");
                    nombre = "";
                }
                } while (nombre === "");
                let descuento;
                let tipo;


                do {
                    tipo = prompt(
                        "Seleccione el tipo de participante:\n\n" +
                        "1. Estudiante\n" +
                        "2. Docente\n" +
                        "3. Publico general\n" +
                        "4. Regresar al menu principal"
                    );


                    // Determinar descuento
                    switch (tipo) {

                        case "1":
                            descuento = DESCUENTO_ESTUDIANTE;
                            break;

                        case "2":
                            descuento = DESCUENTO_DOCENTE;
                            break;

                        case "3":
                            descuento = DESCUENTO_GENERAL;
                            break;

                        case "4":
                            break;

                        default:
                            alert("Tipo de participante no valido.");
                            break;
                    }
                } while (tipo !== "1" && tipo !== "2" && tipo !== "3" && tipo !== "4");

                if (tipo === "4") {
                    break;
                }
                let cantidad;

                do {
                    cantidad = Number(prompt("Ingrese la cantidad de entradas (maximo " + MAX_ENTRADAS + "):"));
                    if (!Number.isInteger(cantidad)) {
                        alert("Cantidad no valida. Debe ser un numero entero positivo.");
                    } else if (cantidad < 1 || cantidad > MAX_ENTRADAS) {
                        alert("La cantidad debe estar entre 1 y " + MAX_ENTRADAS + ".");
                    } else if (cantidad > cuposDisponibles) {
                        alert("No hay suficientes cupos disponibles. Cupos restantes: " + cuposDisponibles);
                    }
                } while (cantidad <= 0 || cantidad > MAX_ENTRADAS || cantidad > cuposDisponibles || !Number.isInteger(cantidad));


                const subtotal = cantidad * PRECIO_ENTRADA;
                const valorDescuento = subtotal * descuento;
                const totalPagar = subtotal - valorDescuento;

                cuposDisponibles = cuposDisponibles - cantidad;
                totalEntradasVendidas = totalEntradasVendidas + cantidad;
                ingresosAcumulados = ingresosAcumulados + totalPagar;
                comprasRealizadas++;

                console.log(
                    "Compra #" + comprasRealizadas +
                    " | Comprador: " + nombre +
                    " | Entradas: " + cantidad +
                    " | Total: $" + totalPagar.toFixed(2) +
                    " | Cupos restantes: " + cuposDisponibles
                );

                alert(
                    "RESUMEN DE COMPRA\n\n" +
                    "Comprador: " + nombre + "\n" +
                    "Cantidad: " + cantidad + "\n" +
                    "Subtotal: $" + subtotal.toFixed(2) + "\n" +
                    "Descuento: $" + valorDescuento.toFixed(2) + "\n" +
                    "Total a pagar: $" + totalPagar.toFixed(2) + "\n" +
                    "Compra realizada exitosamente.\n" +
                    "Cupos restantes: " + cuposDisponibles
                );
                break;

        case "2":
            // CONSULTAR CUPOS DISPONIBLES

            let mensajeCupos;

            if (cuposDisponibles > 10) {
                mensajeCupos = "Cupos disponibles";
            } else if (cuposDisponibles >= 1) {
                mensajeCupos = "Ultimos cupos disponibles";
            } else {
                mensajeCupos = "Evento agotado";
            }

            alert(
                "CONSULTA DE CUPOS\n\n" +
                "Cupos disponibles: " + cuposDisponibles + "\n" +
                "Estado: " + mensajeCupos
            );

            break;

        case "3":
            // CONSULTAR INGRESOS ACUMULADOS
            alert(
                "REPORTE DE INGRESOS\n\n" +
                "Total de entradas vendidas: " + totalEntradasVendidas + "\n" +
                "Ingresos acumulados: $" + ingresosAcumulados.toFixed(2) + "\n" +
                "Compras realizadas: " + comprasRealizadas
            );
            break;

        case "4":
            alert("Gracias por utilizar el sistema Innova ESPE 2026");
            alert(
                "RESUMEN FINAL - INNOVA ESPE 2026\n\n" +
                "Entradas vendidas: " + totalEntradasVendidas + "\n" +
                "Cupos restantes: " + cuposDisponibles + "\n" +
                "Ingresos acumulados: $" + ingresosAcumulados.toFixed(2) + "\n" +
                "Compras realizadas: " + comprasRealizadas + "\n\n" +
                "Gracias por utilizar nuestro sistema."
            );
            break;

        default:
            alert("Opcion no valida. Intente nuevamente.");
            break;
    }

} while (opcion !== "4");
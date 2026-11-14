
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
            // COMPRA DE ENTRADAS
            let nombre = prompt("Ingrese el nombre del comprador:"); 
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
        }while (tipo !== "1" && tipo !== "2" && tipo !== "3" && tipo !== "4");

        if (tipo === "4") {
            break; 
        }
        
        let cantidad = Number(prompt("Ingrese la cantidad de entradas:"));
        let subtotal = cantidad * PRECIO_ENTRADA;
        let valorDescuento = subtotal * descuento;
        let totalPagar = subtotal - valorDescuento;

        alert(
        "RESUMEN DE COMPRA\n\n" +
        "Comprador: " + nombre + "\n" +
        "Cantidad: " + cantidad + "\n" +
        "Subtotal: $" + subtotal.toFixed(2) + "\n" +
        "Descuento: $" + valorDescuento.toFixed(2) + "\n" +
        "Total a pagar: $" + totalPagar.toFixed(2)
        );
        break;

        case "2":
            // CONSULTAR CUPOS DISPONIBLES

            let mensajeCupos;
        
             if (cuposDisponibles > 10) {
             mensajeCupos = "Cupos disponibles";
            } else if (cuposDisponibles >= 1) {
            mensajeCupos = "Ultimos cupos disponibles";
            }else{
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
            break;

        default:
            alert("Opcion no valida. Intente nuevamente.");
            break;
  }

} while (opcion !== "4");

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
            alert("Seleccionaste: Comprar entradas");
            break;

        case "2":
            alert("Seleccionaste: Consultar cupos disponibles");
            break;

        case "3":
            alert("Seleccionaste: Consultar ingresos acumulados");
            break;

        case "4":
            alert("Gracias por utilizar el sistema Innova ESPE 2026");
            break;

        default:
            alert("Opcion no valida. Intente nuevamente.");
            break;
  }

} while (opcion !== "4");
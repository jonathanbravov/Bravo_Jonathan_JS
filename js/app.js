
// Vaiables de configuración
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
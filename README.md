
# Sistema Innova ESPE 2026

## Descripción
El sistema permite registrar compras, calcular descuentos según el tipo de participante, controlar los cupos disponibles y consultar los ingresos acumulados.

## Tecnologías
- HTML5
- JavaScript

## Estructura del proyecto
```text
APELLIDO_NOMBRE_JS/
├── index.html
├── js/
│   └── app.js
└── README.md
```

## Funcionalidades
- Compra de entradas.
- Descuentos para estudiantes y docentes.
- Validación de cantidades.
- Control de cupos disponibles.
- Consulta de entradas vendidas.
- Consulta de ingresos acumulados.
- Resumen final del evento.

## Consideraciones de implementación
- El sistema utiliza cuadros de diálogo (`prompt`, `alert`) para interactuar con el usuario.
- La disponibilidad inicial del evento es de 50 entradas.
- Cada compra permite adquirir un máximo de 5 entradas.
- El precio de cada entrada es de $20.
- Se aplican descuentos del 30 % para estudiantes y del 15 % para docentes.
- El público general no recibe descuentos.
- Los datos de las compras se mantienen únicamente durante la ejecución del programa, ya que no se utiliza una base de datos ni almacenamiento persistente.

## Ejecución
1. Descargar o clonar el repositorio.
2. Abrir el archivo `index.html` en un navegador.
3. Seguir las instrucciones de los cuadros de diálogo.

## Autor
Jonathan Alexander Bravo Vallejos
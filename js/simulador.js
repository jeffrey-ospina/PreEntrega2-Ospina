//Declaración de variables
const precioHora = 400;
let mensaje =
  "Bienvenido.\n \nIngrese '1' para consultar tu deuda. \nIngrese '2'para realizar su pago.  \nIngrese '3' para salir.";

//Arrow Function para crear valores aleatorios para el pago del servicio
const valorAleatorio = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

//Se le asigna un numero ID al usuario usando el ciclo 'for'
alert("Presione 'Aceptar' para obtener su ID:");
for (let numero = 1; numero <= 1; numero++) {
  let numeroAsignado = Math.floor(Math.random() * 40) + 1;
  alert(
    "Tu ID asignado es: #" +
      numeroAsignado +
      "\n \nPresione 'Aceptar' para continuar"
  );
}
//Se muestra el mensaje guardado para comenzar con la otra parte del programa
let inicio = prompt(mensaje);

//Variables afuera para mantener el mismo resultado del bucle a continuación
let hora = valorAleatorio(1, 6);
let minutos = valorAleatorio(1, 60);
let precio = (minutos / 60) * precioHora + hora * precioHora;
let precioTotal = precio.toFixed(2);

//Comienzo del bucle 'while'
while (inicio !== "3") {
  //Se hace uso de condicionales
  if (inicio === "1") {
    alert("Tu deuda total es: " + precioTotal + "$");
  } else if (inicio === "2") {
    alert(
      "Se ha pagado correctamente el monto de: " +
        precioTotal +
        "$" +
        "\n\n¡Gracias por preferirnos, vuelva pronto!"
    );
  } else {
    alert("Por favor ingrese una opción válida.");
  }

  inicio = prompt(mensaje);
}
alert("Hasta luego.");

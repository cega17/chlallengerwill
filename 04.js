/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:
   // Convertimos el número a string para obtener su reverso.
   const numStr = num.toString();

   // Obtenemos el reverso del número convirtiendo el string a un arreglo, invirtiéndolo y luego uniéndolo.
   const reversoStr = numStr.split("").reverse().join("");
 
   // Convertimos el reverso nuevamente a un número.
   const reversoNum = parseInt(reversoStr);
 
   // Comparamos el número original con su reverso para determinar si es simétrico.
   return num === reversoNum;

}
/*
console.log(numeroSimetrico(11711)); // Salida: true
console.log(numeroSimetrico(12321)); // Salida: true
console.log(numeroSimetrico(12345)); // Salida: false
*/

// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico
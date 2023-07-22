/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function soloNumeros(array) {
  // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo los enteros.
  // Ej: 
  // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]

  // Tu código aca:
  // Utilizamos el método filter() para crear un nuevo arreglo con solo los enteros.
  const soloEnteros = array.filter((elemento) => typeof elemento === "number");

  // Retornamos el nuevo arreglo con solo los enteros.
  return soloEnteros;

}
/*const miArreglo = [1, "Henry", 2, "3", true, 4.5];
const resultado = soloNumeros(miArreglo);
console.log(resultado); */

// No modifiques nada debajo de esta linea //


module.exports = soloNumeros
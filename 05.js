/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function pluck(array, propiedad) {
  // La función llamada 'pluck' recibe como argumento un array de objetos llamado 'array' y el nombre de una
  // propiedad.
  // La función debe devolver un nuevo arreglo con solo los valores dentro de la propiedad recibida
  // Ej:
  // var productos = [{ name: 'TV LCD', price: 100}, { name: 'Computadora', price: 500 }]
  // productos.pluck(productos, 'name') debería devolver ['TV LCD', 'Computadora']
  // Pista: es una buena oportunidad para usar map.

  // Tu código acá:
  // Utilizamos el método map() para obtener un nuevo arreglo con los valores de la propiedad especificada.
  const valoresPropiedad = array.map((objeto) => objeto[propiedad]);

  // Retornamos el nuevo arreglo con los valores de la propiedad.
  return valoresPropiedad;

}
/*
const productos = [{ name: 'TV LCD', price: 100 }, { name: 'Computadora', price: 500 }];
console.log(pluck(productos, 'name')); // Salida: ['TV LCD', 'Computadora']
console.log(pluck(productos, 'price')); // Salida: [100, 500]
*/

// No modifiques nada debajo de esta linea //

module.exports = pluck
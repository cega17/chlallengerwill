/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function filtrar(funcion) {
  // Escribi una función filtrar en el prototipo de Arrays,
  // que recibe una funcion (callback) que devuelve true o false.
  // filtrar los elementos de ese arreglo en base al resultado de esa funcion
  // comparadora, devolver un nuevo arreglo con los elementos filtrados.
  // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
  // ej:
  // var productos = [{
  //   price: 100,
  //   name: 'tv'
  // }, {
  //   price: 50,
  //   name: 'phone'
  // }, {
  //   price: 30,
  //   name: 'lamp'
  // }]
  // productos.filtrar(function(p) {
  //   return p.price >= 50;
  // }) => [{price: 100, name:'tv'}]
  // Agregamos el método 'filtrar' al prototipo de Array
Array.prototype.filtrar = function(funcion) {
  const resultado = [];

  // Recorremos cada elemento del arreglo
  for (let i = 0; i < this.length; i++) {
    // Si la función comparadora devuelve true para el elemento actual, lo agregamos al nuevo arreglo
    if (funcion(this[i])) {
      resultado.push(this[i]);
    }
  }

  return resultado;
};

// Ejemplo de uso:
var productos = [{
  price: 100,
  name: 'tv'
}, {
  price: 50,
  name: 'phone'
}, {
  price: 30,
  name: 'lamp'
}];

var productosFiltrados = productos.filtrar(function(p) {
  return p.price >= 50;
});


console.log(productosFiltrados); // Output: [{price: 100, name:'tv'}]




// No modifiques nada debajo de esta linea //

module.exports = filtrar
}
/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function buscarAmigo(amigos, nombre) {
  // La funcion llamada 'buscarAmigo' recibe como argumento un array llamado 'amigos' que contiene
  // en cada posición del arreglo un objeto que tiene como propiedades 'nombre' y 'edad'. También
  // recibe un string llamado 'nombre'.
  // Debe devolver el objeto cuya propiedad 'nombre' coincida con el string 'nombre' recibido por argumento.
  // Ej:
  //  var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
  //  buscarAmigo(amigos, 'toni') debe devolver { nombre: 'toni', edad: 33 };

  // Tu código aca:
  // Utilizamos el método find() para buscar el objeto cuya propiedad 'nombre' coincide con el string 'nombre'.
  const amigoEncontrado = amigos.find((amigo) => amigo.nombre === nombre);

  // Retornamos el objeto encontrado, o undefined si no se encontró ningún objeto con el nombre buscado.
  return amigoEncontrado;
  
}
/*const amigos = [{ nombre: 'toni', edad: 33 }, { nombre: 'Emi', edad: 25 }, { nombre:'john', edad: 30}];
console.log(buscarAmigo(amigos, 'toni')); // Salida: { nombre: 'toni', edad: 33 }
console.log(buscarAmigo(amigos, 'Emi'));  // Salida: { nombre: 'Emi', edad: 25 }
console.log(buscarAmigo(amigos, 'john')); */

// No modifiques nada debajo de esta linea //

module.exports = buscarAmigo
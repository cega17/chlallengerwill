/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function stringMasLarga(strings) {
  // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
  // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
  // Ej:
  // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
  // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'

  // Tu código 
  const STmasLargo = strings.reduce((strMasLargo, strActual) => {
    return strActual.length > strMasLargo.length ? strActual : strMasLargo;
  }, "");

  // Retornamos el string más largo.
  return STmasLargo;
    }
    const miArreglo1 = ['hi', 'hello', 'ni hao', 'guten tag'];
console.log(stringMasLarga(miArreglo1)); // Salida: "guten tag"

const miArreglo2 = ['JavaScript', 'HTML', 'CSS'];
console.log(stringMasLarga(miArreglo2));

// No modifiques nada debajo de esta linea //

module.exports = stringMasLarga
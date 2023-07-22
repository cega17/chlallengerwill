/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function crearClasePersona() {
  class Persona {
    constructor(nombre, edad, hobbies, amigos) {
      // El constructor de la clase Persona recibe nombre (string), edad (integer), hobbies (array de strings), amigos (array de objetos)
      // Inicializar las propiedades de la persona con los valores recibidos como argumento

      // Tu código aca:
       // Inicializar las propiedades de la persona con los valores recibidos como argumento
       
          // Inicializar las propiedades de la persona con los valores recibidos como argumento
          this.nombre = nombre;
          this.edad = edad;
          this.hobbies = hobbies;
          this.amigos = amigos;
        }
      }
    
const persona1 = new Persona("John", 30, ["fútbol", "lectura"], [{ nombre: "Alice", edad: 28 }, { nombre: "Bob", edad: 32 }]);
console.log(persona1.nombre); // Salida: "John"
console.log(persona1.edad);   // Salida: 30
console.log(persona1.hobbies); // Salida: ["fútbol", "lectura"]
console.log(persona1.amigos); // Salida: [{ nombre: "Alice", edad: 28 }, { nombre: "Bob", edad: 32 }]

    addFriend(nombre, edad) {
      // El método 'addFriend' recibe un string 'nombre' y un entero 'edad' y debe agregar un objeto:
      // { nombre: nombre, edad: edad} al arreglo de amigos de la persona.
      // No debe retornar nada.
       //Tu código aca:
     class Persona {
      constructor(nombre, edad, hobbies, amigos) {
        this.nombre = nombre;
        this.edad = edad;
        this.hobbies = hobbies;
        this.amigos = amigos;
      }
    
      
  
    
    /*const persona1 = new Persona("John", 30, ["fútbol", "lectura"], [{ nombre: "Alice", edad: 28 }, { nombre: "Bob", edad: 32 }]);
console.log(persona1.amigos); // Salida: [{ nombre: "Alice", edad: 28 }, { nombre: "Bob", edad: 32 }]

persona1.addFriend("Charlie", 29);
console.log(persona1.amigos); // Salida: [{ nombre: "Alice", edad: 28 }, { nombre: "Bob", edad: 32 }, { nombre: "Charlie", edad: 29 }]
//En este ejemplo, creamos una instancia de la clase Persona llamada persona1 con amigos Alice y Bob. Luego, utilizamos el método addFriend para agregar un nuevo amigo llamado Charlie con edad 29 al arreglo de amigos de la persona. Finalmente, imprimimos el arreglo actualizado de amigos y vemos que se ha agregado el nuevo amigo correctamente.
    */

   /* addHobby(hobby) {
      // El método 'addHobby' recibe un string 'hobby' y debe agregarlo al arreglo de hobbies de la persona.
      // No debe retornar nada.

      // Tu código aca:
  
        constructor(nombre, edad, hobbies, amigos) {
          this.nombre = nombre;
          this.edad = edad;
          this.hobbies = hobbies;
          this.amigos = amigos;
        }
      
        addHobby(hobby) {
          // Agregar el string hobby al arreglo de hobbies de la persona.
          this.hobbies.push(hobby);
        }
      }
      

    }
    getFriends() {
      // El método 'getFriends' debe retornar un arreglo con sólo los nombres del arreglo de amigos
      // de la persona.
      // Ej:
      // Suponiendo que la persona tiene estos amigos: [{nombre: 'martin', edad: 31},{nombre: 'toni', edad: 33}]
      // persona.getFriends() debería devolver ['martin', 'toni']

      // Tu código aca:

    }

    getHobbies() {
      // El método 'getHobbies' debe retornar un arreglo con los hobbies de la persona
      // Ej:
      // persona.getHobbies() debe devolver ['correr', 'dormir', 'nadar']

      // Tu código aca:

    }

    getPromedioEdad() {
      // El método 'getPromedioEdad' debe retornar el promedio de edad de los amigos de una persona
      // Ej:
      // Si la persona tuviera estos amigos:
      // {
      //   amigos: [{
      //     nombre: 'toni',
      //     edad: 33,
      //   }, {
      //     nombre: 'Emi',
      //     edad: 25
      //   }]
      // }
      // persona.getPromedioEdad() debería devolver 29 ya que (33 + 25) / 2 = 29

      // Tu código aca:
*/
    }
  }
  

}
// No modifiques nada debajo de esta linea //

module.exports = crearClasePersona
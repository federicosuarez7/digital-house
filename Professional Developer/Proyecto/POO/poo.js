// Creamos una clase
class Persona {
    // Metodo constructor de la clase
    constructor (nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    // Metodo de clase
    saludar(nombre){
        console.log(`${this.nombre} dice:!Hola ${nombre}, ¿cómo estás?`);
    }
}

// Instanciamos un objeto de la clase Persona
let persona1 = new Persona("Federico",35);
persona1.saludar("Yury");

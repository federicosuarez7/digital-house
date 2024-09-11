// Creamos una clase
class Persona {
    // Metodo constructor de la clase
    constructor (nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    // Metodo de clase
    saludar(nombre){
        return `${this.nombre} dice:<br>!Hola ${nombre}, ¿cómo estás?`;
    }
    decirEdad(edad){
        return `${this.nombre} dice:<br>Yo tengo ${this.edad} años... `;
    }
}

function saludar(){
    const nombreInput = document.getElementById('nombreInput').value;
    const edadInput = document.getElementById('edadInput').value;
    const invitadoInput = document.getElementById('invitadoInput').value;

    if(nombreInput.trim() == '' || edadInput.trim() == '' ){
        alert('Los campos son obligatorios');
        return;
    }

    const persona1 = new Persona(nombreInput,edadInput);
    const saludo = persona1.saludar(invitadoInput);
    const edadMsj = persona1.decirEdad(invitadoInput);
    const resultado = document.getElementById('res');
    resultado.innerHTML =  `<p> ${saludo}</p> <p>${edadMsj}</p>`;
}

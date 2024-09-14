// Creamos una clase
class Persona {
    // Metodo constructor de la clase
    constructor (nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    // Metodo de clase
    saludar(nombre){
        return `${this.nombre} dice:<br>¡Hola ${nombre}!, ¿cómo estás?`;
    }
    decirEdad(nombre){
        return `${this.nombre} dice:<br>Yo tengo ${this.edad} años... `;
    }
}
class Alumno extends Persona{
    constructor(nombre,edad,curso){
        super(nombre,edad);
        this.curso = curso;
    }
    presentarse(){
        return `${super.saludar('profesor')}, soy un alumno del curso ${this.curso}`;
    }
}
class Profesor extends Persona{
    constructor(nombre,edad,materia){
        super(nombre,edad);
        this.materia = materia;
    }
    presentarse(){
        return `${super.saludar('estudiantes')},soy el Profesor de ${this.materia}`;
    }
}

function saludar(){
    const nombreInput = document.getElementById('nombreInput').value;
    const edadInput = document.getElementById('edadInput').value;
    const rolSelect = document.getElementById('rolSelect').value;

    if(nombreInput.trim() == '' || edadInput.trim() == ''){
        alert('Los campos son obligatorios');
        return;
    }

    let persona2;
    switch(rolSelect){
        case 'Alumno':
            const cursoInput = prompt('Ingrese el curso del alumno:');
            persona2 = new Alumno (nombreInput,edadInput,cursoInput);
            break;
        case 'Profesor':
            const materiaInput = prompt('Ingrese la materia del profesor:');
            persona2 = new Profesor (nombreInput,edadInput,materiaInput);
            break;
        default:
            alert('Debe seleccionar un rol');
            return;
    }

    const presentacion = persona2.presentarse();
    const saludo = persona2.saludar('Invitado');
    const edadMsj = persona2.decirEdad('Invitado');
    const resultado = document.getElementById('res');
    resultado.innerHTML =  `<p> ${saludo}</p> <p>${edadMsj}</p> <p>${presentacion}</p>`;
}


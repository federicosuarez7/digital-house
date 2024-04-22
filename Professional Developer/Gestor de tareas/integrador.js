// const prompt = require("prompt-sync")({sigint:true});

// Array para almacenar todas las tareas
let tareas = [];

// Funcion para agregar nuevas tareas al array tareas
function agregarTarea(nombreTarea,fechaIngresada=null){
    tareas.push({nombre:nombreTarea,
                 completada: false,     
                 fechaLimite: fechaIngresada});
}

// Funcion para eliminar una tarea
function eliminarTarea(indice){
    if (indice>=0 && indice<tareas.length) {
        tareas.splice(indice,1);
        console.log("Tarea elminada correctamente!!");
    }else{
        console.log("No se ha eliminado ninguna tarea, índice iválido!!");
    }
}

// Funcion para marcar una tarea completada
function tareaCompletada(indice) {
    if (indice>=0 && indice<tareas.length) {
        tareas[indice].completada = true;
        console.log("Tarea marcada como completada");
    }else{
        console.log("Indice de tarea inválido");
    }
}

// Funcion para modificar una tarea
function modificarTarea(indice,nombreTarea,fechaIngresada = null) {
    if (indice>=0 && indice<tareas.length) {
        tareas[indice].nombre = nombreTarea;
        if (fechaIngresada != null) {
            tareas[indice].fechaLimite = fechaIngresada;
        }
        console.log("Tarea modificada con éxito");
    }else{
        console.log("No se ha modificado la tarea, índice inválido");
    }
}

// Funcion para mostrar el menu de opciones
function mostrarMenuPrincipal() {
    console.log(" -----Menu principal----- ");
    console.log(" 1. Agregar tarea");
    console.log(" 2. Eliminar tarea");
    console.log(" 3. Marcar tarea como completada");
    console.log(" 4. Modificar una tarea");
    console.log(" 5. Mostrar todas las tareas");
    console.log(" 6. Salir");
}

// Funcion para interactuar con el usuario
function interactuarUsuario() {
    let opcion = -1;
    while (opcion!=0) {
        mostrarMenuPrincipal();
        opcion = parseInt(prompt("Ingrese la opcion deseada: "));
        switch (opcion) {
            case 1:
                let nombreTarea = prompt("Ingrese el nombre de la tarea: ");
                agregarTarea(nombreTarea);
                break;
            case 2:
                let indiceTareaEliminar = parseInt(prompt("Indique el indice de la tarea a eliminar: "));
                eliminarTarea(indiceTareaEliminar);
                break;
            case 3:
                let indiceTareaCompletada = parseInt(prompt("Indique el indice de la tarea a marcar como completada: "));
                tareaCompletada(indiceTareaCompletada);
                break;
            case 4:
                let indiceTareaModificar = parseInt(prompt("Indique el indice de la tarea a modificar: "));
                let nombreTareaModificar = prompt("Indique el nombre nuevo de la tarea: ");
                modificarTarea(indiceTareaModificar,nombreTareaModificar);
                break;
            case 5:
                console.log(" -----Lista de tareas----- ");
                console.log(tareas);
                break;
            default: 
            console.log("Opcion invalida");
                break;
        }
    }
}



interactuarUsuario();
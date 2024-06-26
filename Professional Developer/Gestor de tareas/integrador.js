// Array para almacenar todas las tareas
let tareas = [];
let categoriasNombres = [
    "trabajo","Personal",
    // Agregar mas categorias segun sea necesario
];
// funcion que muestra todas las categorias
function mostrarCategorias() {
    console.log("Categorias existentes: ");
    categoriasNombres.forEach(function(categoria,indice) {
        console.log(indice + ": " + categoria)
    });
}
// Funcion que sirve para cargar nuevas categorias por el usuario
function agregarNuevaCategoria(nombreCategoria) {
    categoriasNombres.push(nombreCategoria);
    console.log("Categoría "+nombreCategoria+ " agregada correctamente!!");
}
// Funcion para agregar nuevas tareas al array tareas
function agregarTarea(nombreTarea,fechaIngresada=null){
    mostrarCategorias();
    let numeroCategoria = parseInt(prompt("Ingrese el numero de la categoría para asignar la tarea:"));
    if(numeroCategoria>=0 && numeroCategoria < categoriasNombres.length){
        tareas.push({categoria:numeroCategoria,
            nombre:nombreTarea,
            completada: false,     
            fechaLimite: fechaIngresada});
        console.log("Tarea agregada con éxito!!!!");
    }else{
        console.log("Numero de categoria incorrecto");
    }
    
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
function modificarTarea(indice,nombreTarea,numcategoria,fechaIngresada = null) {
    if (indice>=0 && indice<tareas.length) {
        tareas[indice].nombre = nombreTarea !== undefined ? nombreTarea : tareas[indice].nombre;
        tareas[indice].categoria = numcategoria !== undefined ? numcategoria: tareas[indice].categoria;
        tareas[indice].fechaLimite = fechaIngresada !== undefined ? fechaIngresada : tareas[indice].fechaLimite;
        console.log("Tarea modificada con éxito");
    }else{
        console.log("No se ha modificado la tarea, índice inválido");
    }
}

// Funcion para filtrar categorias de tareas
function filtrarTareasPorCategoria(numeroCategoria) {
    let tareasFiltradas = tareas.filter(function(tarea){
        return tarea.categoria === numeroCategoria;
    });
    return tareasFiltradas;
}
// Funcion para mostrar la cantidad de tareas completadas
function contadorTareasCompletadasPorCategorias(numeroCategoria) {
    let tareasCategoria = filtrarTareasPorCategoria(numeroCategoria);
    let tareasCompletadas = tareasCategoria.reduce(function(contador,tarea){
        return tarea.completada ? contador ++ : contador;
    },0);
    let tareasEnTotal = tareasCategoria.length;
    console.log("Tareas completadas de la categoria: "+ numeroCategoria+ ": "+tareasCompletadas+" de "+tareasEnTotal+ " tareas!!!!");
}
// Funcion para mostrar todas las tareas no completadas
function mostrarTareasNoCompletadas() {
    console.log("Tareas no completadas: ");
    tareas.forEach(function(tarea){
        if (!tarea.completada) {
            console.log("-Nombre: "+tarea.nombre+",Categoria: "+categoriasNombres[tarea.categoria]);
        }
    });

}
// Funcion para ordenar tareas por la propiedad 'nombre' utilizando
// bubbleSort
function ordenarTareasPorNombres() {
    let temporal;
    for (let j = 0; j < tareas.length; j++) {
        for (let i = 0; i < tareas.length - 1; i++) {
            if (tareas[i].nombre>tareas[i+1].nombre) {
                temporal =tareas[i];
                tareas[i] = tareas[i+1];
                tareas[i+1] = temporal;
            }
        }
    }
}
// Funcion para ordenar por fecha 
function ordenarTareasPorFechaLimite() {
    let temporal;
    for (let j = 0; j < tareas.length; j++) {
        for (let i = 0; i < tareas.length - 1; i++) {
            if (tareas[i].fechaLimite>tareas[i+1].fechaLimite) {
                temporal =tareas[i];
                tareas[i] = tareas[i+1];
                tareas[i+1] = temporal;
            }
        }
    }
}
// Funcion que busca tareas por su nombre y retorna su posicion 
// Usando busqueda binaria
function buscarTareasPorNombre(nombreTarea) {
    let limiteInicio = 0;
    let limiteFinal = tareas.length -1;
    while (limiteInicio<=limiteFinal) {
        let elementoMedio = Math.round((limiteInicio+limiteFinal)/2);
        if (tareas[elementoMedio]===nombreTarea) {
             return elementoMedio;
        }else if(tareas[elementoMedio].nombre<nombreTarea){
            limiteInicio = elementoMedio + 1;
        }else {
            limiteFinal = elementoMedio - 1;
        }
    }
    // Si el elemento no esta en el arreglo devolvera este valor
    return -1;
}
// Funcion para mostrar el menu de opciones
function mostrarMenuPrincipal() {
    console.log(" -----Menu principal----- ");
    console.log("1. Agregar tarea");
    console.log("2. Eliminar tarea");
    console.log("3. Marcar tarea como completada");
    console.log("4. Modificar una tarea");
    console.log("5. Mostrar todas las tareas");
    console.log("6. Mostrar todas las categorias");
    console.log("7. Agregar nueva categoria");
    console.log("8. Filtrar tareas por categorías");
    console.log("9. Visualizar cantidad de tareas completadas por categoria");
    console.log("10. Visualizar todas las tareas no completadas");
    console.log("11. Ordenar las tareas alfabeticamente");
    console.log("12. Ordenar las tareas por fecha limite");
    console.log("13. Buscar tarea por su nombre");
    console.log(" 0. Salir");
}



// Funcion para interactuar con el usuario
function interactuarUsuario() {
    let opcion = -1;
    while (opcion!=0) {
        mostrarMenuPrincipal();
        opcion = parseInt(prompt("Ingrese la opcion deseada: "));
        switch (opcion) {
            case 0:
                console.log("Saliendo del programa...........");
                break;
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
                if(indiceTareaModificar >=0 && indiceTareaModificar < tareas.length){
                    console.log("Menu para modificar una tarea, indique la opcion deseada:");
                    console.log("1. Modificar nombre tarea");
                    console.log("2. Modificar categoria de la tarea");
                    console.log("3. Modificar fecha límite");
                    let ingresoUsuario = parseInt();
                    switch (ingresoUsuario) {
                        case 1:
                            let nuevoNombreTarea = prompt("Ingrese el nuevo nombre de su tarea: ");
                            modificarTarea(indice,nuevoNombreTarea)
                            break;
                        case 2:
                            let cambioCategoria = parseInt(prompt("Ingrese el numero de la categoria para asignarla a la tarea: "));
                            if(cambioCategoria>=0 && cambioCategoria<categoriasNombres.length){
                                modificarTarea(indice,undefined,cambioCategoria);
                            }else{
                                console.log("Opcion ingresada invalida");
                            }
                            
                            break;
                        case 3:
                            let nuevaFecha = prompt("Ingrese la nueva fecha limite de la tarea: ");
                            modificarTarea(indice,undefined,undefined,nuevaFecha);
                            break;
                    
                        default:
                            console.log("Opcion ingresada incorrecta");
                            break;
                    }
                }else{
                    console.log("Indice de tarea incorrecto!!!!");
                }
                
                break;
            case 5:
                console.log(" -----Lista de tareas----- ");
                console.log(tareas);
                break;
            case 6:
                mostrarCategorias();
                break;
            case 7:
                let nuevaCategoria =prompt("Ingrese el nombre de la nueva categoría: ");
                agregarNuevaCategoria(nuevaCategoria);
                break;
            case 8:
                mostrarCategorias();
                let numCategoriaFiltrar = parseInt(prompt("Ingrese el numero de la categoría a filtrar: "));
                let tareasCategoria = filtrarTareasPorCategoria(numCategoriaFiltrar);
                console.log("Tareas de la categoria seleccionada: ");
                console.log(tareasCategoria);
            case 9:
                mostrarCategorias();
                let nroCategoria = parseInt(prompt("Ingrese el numero de la categoria a visualizar: "));
                contadorTareasCompletadasPorCategorias(nroCategoria);
                break;
            case 10:
                mostrarTareasNoCompletadas();
                break;
            case 11:
                ordenarTareasPorNombres();
                console.log("Tareas por nombre");
                console.log(tareas);
                break;
            case 12:
                ordenarTareasPorFechaLimite();
                console.log("Tareas por fecha");
                console.log(tareas);
                break;
            case 13:
                ordenarTareasPorNombres();
                let nombreABuscar = prompt("Ingrese el nombre de la tarea a buscar: ");
                let indiceTarea = buscarTareasPorNombre(nombreABuscar);
                if (indiceTarea!==-1) {
                    console.log("Tarea encontrada en posicion: "+indiceTarea);
                }else{
                    console.log("Tarea no encontrada");
                }
                
                break;
            default: 
            console.log("Opcion invalida");
                break;
        }
    }
}
interactuarUsuario();
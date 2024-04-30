// Funcion que recorre array y ejecuta un callback
function procesarArreglo (array,callback){
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
        
    }
}
// Funcion que se enviara por parametro (callbacks) para mostrar los elementos del arreglo
function mostrarElementos (elemento){
    console.log(elemento);
}

function multiplicarPorDos (elemento){
    console.log(elemento*2);
}

// Creamos el array
let array = [1,2,3,4,5];

// Llamada a la funcion procesar
procesarArreglo(array,mostrarElementos);
procesarArreglo(array,multiplicarPorDos);

// Unir dos arrays: Crea una función llamada ‘unirArrays’ que tome dos arrays como parámetros y los una en uno solo.
//  La función debe devolver el nuevo array.Para esto, averiguar qué hace el método .concat()
let array1 = [1,2,3];
let array2 = [4,5,6];
function unirArrays(arreglo1,arreglo2) {
    let array3 = arreglo1.concat(arreglo2);
    return array3;
}
let arrayUnidos = unirArrays(array1,array2);
console.log(arrayUnidos);
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Eliminar primer elemento: Crea una función llamada ‘eliminarPrimerElemento’ que tome un array como parámetro y elimine el primer elemento.
//  La función debe devolver el elemento eliminado.
let array4 = [0,1,2];
function eliminarPrimerElemento(dato){
    let array5 = dato.shift();
    return array5;
}
let elementoEliminado = eliminarPrimerElemento(array4);
console.log(elementoEliminado);
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Convertir texto: Crea una función que reciba un string por parámetro y lo convierta a mayúsculas y minúsculas respectivamente. La función deberá mostrar los resultados por consola. 
// Para esto, averiguar qué hacen los métodos de Strings: toUpperCase() y toLowerCase()
let frase = "¡HOLA como estas!";
function convierteMayuscula(parametro) {
    let fraseMayusculas = parametro.toUpperCase();
    return fraseMayusculas;
}
function convierteMinuscula(parametro) {
    let fraseMinusculas = parametro.toLowerCase();
    return fraseMinusculas;
}
let fraseMayus = convierteMayuscula(frase);
console.log(fraseMayus);
let fraseMinus = convierteMinuscula(frase);
console.log(fraseMinus);
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Manipulación de objetos: Crea un objeto llamado ‘persona’ que contenga como propiedades: nombre, edad y ocupación. 
// Crea una función que muestre cada propiedad de dicho objeto por consola, e invocala para ver sus valores. Luego, modifica el valor de ‘ocupación’ y agrega la propiedad ‘habilidad’. 
// Llama nuevamente a la función creada para visualizar el cambio efectuado.
let persona = {
    nombre:"Federico",
    edad: 35,
    ocupacion: "desarrollador web"
}
function objetoPersona(parametro) {
    let nombre = parametro.nombre;
    let edad = parametro.edad;
    let ocupacion = parametro.ocupacion;
    let exportar = `Mi nombre es ${nombre},tengo ${edad} años y trabajo de ${ocupacion}`; 
    return exportar;
}
let datosPer = objetoPersona(persona);
console.log(datosPer);
persona.ocupacion = "empleado";
persona.habilidad = "comunicacion";
let newPer = objetoPersona(persona);
console.log(newPer);
console.log(persona) 
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

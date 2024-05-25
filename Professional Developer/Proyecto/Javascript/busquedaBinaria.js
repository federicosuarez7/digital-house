/* Lo que hace es buscar un elemento dentro de un array y si lo encuentra
 nos devuelve la posicion del mismo dentro del array
sino lo encuentra devuelve -1.
Hace lo mismo que la busqueda lineal pero es mas efectivo porque utiliza 
 menos iteraciones.
 Hay que tener en cuenta de ordenar el array de menor a mayor para que funcione*/
let arreglo = [1,2,3,4,5,6,7,8,9];
let numBuscar = 3;
function busquedaBinaria(array,valorBuscado) {
    let limiteInical = 0;
    let limiteFinal = array.length - 1;
    // Se va a repetir este bloque de codigo mientras se cumpla la condicion
    // del while
    while (limiteInical<=limiteFinal) {
        //Determinamos la mitad del arreglo y redondeamos para tener un 
        //valor entero que seria la posicion del elemento dentro del array
        const INDICEMITAD = Math.round((limiteInical + limiteFinal)/2);
        //Guardamos en una variable el valor de la posicion encontrada
        const ELEMENTOMEDIO = array[INDICEMITAD];
        if (ELEMENTOMEDIO==valorBuscado) {
            return INDICEMITAD;
        }
        //Con este bloque de codigo modificamos los limites de busqueda
        if (ELEMENTOMEDIO>valorBuscado) {
            limiteFinal = INDICEMITAD-1;
        }else{
            limiteInical = INDICEMITAD + 1; 
        }
    } 
    return null;
}
let indiceEncontrado = busquedaBinaria(arreglo,numBuscar);
console.log(indiceEncontrado);
/*Contar la cantidad de veces que aparece un número en un array: Crea una función que reciba por parámetro un número y un array de números, 
y devuelva la cantidad de veces que aparece ese número en el array utilizando búsqueda lineal. */
let contador = 0;
function contadorDatos(arreglo,numBuscar) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i]===numBuscar) {
            contador++;
        }
    }
}
let arrayNumeros = [1,23,1,56,5,6,1,88,999,1,11,1];
contadorDatos(arrayNumeros,1);
console.log(contador);
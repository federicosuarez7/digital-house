let array = [14,3,51,7,92,110,5,17,13,48];
let elementoBuscado = 110;
function busquedaLineal(arreglo,datoABuscar) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i]===datoABuscar) {
            return i;
        }
    }
    return -1;
}
let indiceEncontrado = busquedaLineal(array,elementoBuscado);
console.log(indiceEncontrado);
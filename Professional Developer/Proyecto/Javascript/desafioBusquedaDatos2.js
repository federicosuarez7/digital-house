/* Indicar ordenamiento: Crea una función que reciba por parámetro un array de números e indique si el array se encuentra ordenado de forma ascendente o no.*/
function arrayAscendente(array) {
    let buleano = true;
        for(let i=0;i<array.length-1;i++){
            if (array[i]>array[i+1]) {
                buleano = false;
                break;
            }
        }
        if (buleano) {
            console.log("El arreglo esta ordenado de forma ascendente");
        }else{
            console.log("El arreglo NO esta ordenado de forma ascendente");
        }
}

let arregloNumeros = [1,2,3,6,8,9,10];
arrayAscendente(arregloNumeros);
/*BubbleSort: Crea una función que reciba por parámetro un array de números y los ordene de menor a mayor mediante el ordenamiento burbuja.*/
function ordenarMenorAMayor(arreglo) {
    let buleano;
    //Mientras el valor booleano sea true (significa que se ha cambiado un valor) el ciclo se seguirá ejecutando 
    do{
        let longitudArreglo = arreglo.length;
        buleano = false;
        for (let i = 0; i < longitudArreglo; i++) {
            if (arreglo[i]>arreglo[i+1]) {
                let varTemporal = arreglo[i];
                arreglo[i] = arreglo[i+1];
                arreglo[i+1] = varTemporal;
                buleano = true;
            }
        }
        longitudArreglo--;
    }while(buleano);
    return arreglo;
}

let arrayNumeros = [12,56,89,641,100,1,134,1698,-16,-199];
let arrayOrdenado = ordenarMenorAMayor(arrayNumeros);
console.log(arrayOrdenado);
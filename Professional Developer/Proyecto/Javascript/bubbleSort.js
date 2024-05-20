// Algoritmo para ordenamiento de datos
// Ordenamos de menor a mayor
let arreglo = [5,4,1,6,3,2];
for (let j = 0; j< arreglo.length; j++) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > arreglo[i+1]) {
            let temporal = arreglo[i];
            arreglo[i] = arreglo[i+1];
            arreglo[i+1] = temporal;
        }    
    }
}
console.log(arreglo);

// Ordenamos de mayor a menor
let arreglo2 = [5,4,1,6,3,2];
for (let j = 0; j< arreglo2.length; j++) {
    for (let i = 0; i < arreglo2.length; i++) {
        if (arreglo2[i] < arreglo2[i+1]) {
            let temporal = arreglo2[i];
            arreglo2[i] = arreglo2[i+1];
            arreglo2[i+1] = temporal;
        }    
    }
}
console.log(arreglo2);

// Ordenamos un array de string alfabeticamente
let palabras = [ "paloma","cabeza","bebe","zurdo","dedo"];
for (let i = 0; i< palabras.length; i++) {
    for (let j = 0; j < palabras.length; j++) {
        if (palabras[j]>palabras[j+1]) {
            let temporal = palabras[j];
            palabras[j] = palabras[j+1];
            palabras[j+1] = temporal;
        }
    }
}
console.log(palabras);

// Ordenamos objetos
let objetos = [ 
    {
        nombre: "Federico",
        edad:34
    },
    {
        nombre:"Yury",
        edad:28
    },
    {
        nombre:"Leandro",
        edad:9
    }
];
for (let i = 0; i < objetos.length; i++) {
    for (let j = 0; j < objetos.length-1; j++) {
        if (objetos[j].edad>objetos[j+1].edad) {
            let temporal = objetos[j];
            objetos[j] = objetos[j+1];
            objetos[j+1] = temporal;
        }
    }
}
console.log(objetos);
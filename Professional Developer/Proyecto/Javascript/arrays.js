//Creamos un array
let arreglo = [12,10,24,37,"fede"];
// Accedemos a un dato del array
console.log(arreglo[4]);
// Recorremos un array
for (let i=0; i<=arreglo.length;i++){
    console.log(`Edad ${i}: `+arreglo[i]);
}
// Modificamos los elementos de un array y luego los imprimimos
for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] = arreglo[i]+2;
    console.log(arreglo[i]);
}
// Agregamos elementos al array
arreglo [arreglo.length]= "Leandro";
for (let i=0; i<=arreglo.length;i++){
    console.log(`Edad ${i}: `+arreglo[i]);
}
// Extraemos elementos de un array a una variable
let nombreCompleto = ["Federico","Leandro","Suarez"];
let primerNombre = nombreCompleto[0];
console.log(primerNombre);
// Extraer todos los elementos para algo especifico (calculo promedio)
let valores = [10,1,2,4,6,8];
let suma = 0;
for(let i=0;i<valores.length;i++){
    suma += valores[i];
}
let promedio = suma /valores.length;
console.log(promedio);
// Encontrar el mayor o menor valor del array
let mayorMenor = [10,46,33,88,99,1,-16];
let menor = mayorMenor[0];
for (let i = 0; i< mayorMenor.length; i++) {
    if (mayorMenor[i]<menor) {
        menor = mayorMenor[i];
    }  
}
console.log(`El menor valor del arreglo es: ${menor}`)
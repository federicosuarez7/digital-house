
// .slice()
// Extrae la porcion de un array que le indicamos
let array = [1,2,3,4,5,6];
let nuevoArray = array.slice(1,4);
console.log(nuevoArray);
// .splice()
// Elimina o agrega elementos al array desde un indice especificado
let array2 = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30];
console.log(array2);
array2.splice(2,3,"uno","dos","tres");
console.log(array2);
// .sort()
// Ordena los elementos de un array de menor a mayor
let array3 = [-10,0,-2,155,-26,2,66];
array3.sort();
console.log(array3);
let palabras = ["casa","auto","sol","perro"];
palabras.sort();
console.log(palabras);
// .find()
// Nos devuelve el primer elemento que cumple con una condicion dada
// en una funcion de prueba
let edades = [25,18,30,15,22];
let mayorEdad = edades.find(edad => edad>=18);
console.log(mayorEdad);
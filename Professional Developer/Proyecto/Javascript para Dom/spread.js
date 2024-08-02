// Operador spread en arreglos
const array1 = [1,2,3];
const array2 = [4,5,6];
const arraySpread = [...array1,...array2,7,8,9,0];
console.log("Operador spread en arreglos");
console.log(arraySpread);
console.log("*************************");
console.log("\nOperador spread en objetos");
console.log("Objeto 1");
const objeto1 = {
    propiedad1 : 1,
    propiedad2 : 2,
    propiedad3 : 3
} 

const objeto2 = {
    ...objeto1,
    propiedad4 : 45,
    propiedad5 : 66
}

console.log(objeto1);
console.log("Objeto 2");
console.log(objeto2);
console.log("El objeto 1 es igual y del mismo tipo que el objeto 2?");
console.log(objeto1 === objeto2);




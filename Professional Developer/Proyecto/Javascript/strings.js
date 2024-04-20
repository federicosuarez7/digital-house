// Metodos de strings
let saludo = "Hola comunidad";
console.log(saludo[3]);
// length
console.log(saludo.length);
// indexOf()
console.log(saludo.indexOf("u"));
// slice() Corta el string en el valor que le indicamos
console.log(saludo.slice(2));
// trim() Corta los espacios del principio y el final
let nombreCompleto = "      Federico Leandro Suarez      ";
console.log(nombreCompleto.trim());

// split() Divide un string en distintas partes y devuelve un nuevo array
let saludo2 = "¡Hola! ¿Como estas?";
console.log(saludo2.split(" "));
// replace() Reemplaza una parte del array
let  frase = "Me encanta Java";
console.log(frase.replace("encanta","gusta"));
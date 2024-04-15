//Tipos de variables
let var_numeros = 10;
let var_booleano = true;
let var_caracter = "@";
let var_string = "Hola";
let var_null = null;
let var_undefined = undefined;

//Como imprimir en consola
console.log(var_string);
console.log("var_numeros");

// Concatenacion e interpolacion
let nombre = "Federico";
let apellido = "Suarez";

console.log(`Mi nombre completo es:${nombre} ${apellido}`);
// Funciones
function saludar(){
    console.log("Hola soy una funcion");
}
saludar();
// Funciones con parametros
function suma(num1,num2){
    let resultado = num1 + num2;
    console.log("El resultado es: "+resultado);
}
// num1 = 10;
// num2 = 3;
// suma(num1,num2);
suma(8,1);
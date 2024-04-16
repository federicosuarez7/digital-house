const prompt = require("prompt-sync")({sigint: true});
// Suma
function suma(num1,num2){
    let resultado = num1+num2;
    return resultado;
}
// Resta
function resta(num1,num2){
    let resultado = num1-num2;
    return resultado;
}
// Multiplicacion
function multiplica(num1,num2){
    let resultado = num1*num2;
    return resultado;
}
// Division 
function division(num1,num2){
    if(num2==0){
        console.log("No se puede dividir por cero");
    }else{
        let resultado = num1/num2;
    }
    return resultado;
}
console.log("1.Suma");
console.log("2.Resta");
console.log("3.Multiplicacion");
console.log("4.Division");
console.log("5.Salir");
let opcion = parseInt(prompt("Escoge la opcion para la calculadora:"));
switch(opcion){
    case 1:
        let num1=parseInt(prompt("Ingrese el primer valor:"));
        let num2=parseInt(prompt("Ingrese el segundo valor:"));
        let resultadoSuma = suma(num1,num2);
        console.log("El resultado de la suma es: "+ resultadoSuma);
        break;
    case 2:
        let nume1=parseInt(prompt("Ingrese el primer valor:"));
        let nume2=parseInt(prompt("Ingrese el segundo valor:"));
        let resultadoResta = resta(nume1,nume2);
        console.log("El resultado de la resta es: "+ resultadoResta);
        break;
    case 3:
        let numer1=parseInt(prompt("Ingrese el primer valor:"));
        let numer2=parseInt(prompt("Ingrese el segundo valor:"));
        let resultadoMultiplica = multiplica(numer1,numer2);
        console.log("El resultado de la multiplicacion es: "+ resultadoMultiplica);
        break;
    case 4:
        let numero1=parseInt(prompt("Ingrese el primer valor:"));
        let numero2=parseInt(prompt("Ingrese el segundo valor:"));
        let resultadoDivide = division(numero1,numero2);
        console.log("El resultado de la division es: "+ resultadoDivide);
        break;
    default:
        console.log("Opcion invalida");
        break;
}


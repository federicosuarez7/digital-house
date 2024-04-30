// Funciones declaradas
console.log(suma(1,2));
function suma(num1,num2){
    return num1+num2;
}

// Funciones expresadas
let resta = function (num3,num4) {
    return num3-num4;
}
console.log(resta(4,3));

// Arrow functions
let multiplicacion = (num5,num6) => {
    return num5*num6;
} 
console.log(multiplicacion(5,6));


let objeto = {
    valor: 10,
    doble: function (){
        return this.valor * 2; 
    }
}

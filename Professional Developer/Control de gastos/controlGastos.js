// Matrices
// Se está realizando el desarrollo de una aplicación para control de gastos. Cada día, el usuario ingresa sus gastos cotidianos. La idea es solo registrar el total de los gastos, al finalizar la jornada. 
// Para simplificar, vamos a considerar que todos los meses tienen cuatro semanas. Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día. 
// Es decir fila 0, semana 1, fila 1, semana 2, etc. Columna 0, dia 1, columna 1, dia 2, etcétera.
//     1.Gastos de toda la semana: Crear una función que nos sirva para obtener el total de gastos de una semana específica. Recordemos que cada fila representa una semana. 
//     El número de semana deberá recibirse por parámetro.
//     2.Gastos de un día de la semana: Crea una función que nos sirva para obtener el total de gastos de un día específico de la semana. 
//     Por ejemplo, del gasto de todos los martes del mes, o el gasto de todos los sábados del mes. El número correspondiente al día deberá recibirse por parámetro. 
//     Recuerda que el número de día es determinado por las columnas.
//     3.Gasto total: Crea una función que nos sirva para obtener el valor total de gastos de todo un mes. La función deberá retornar dicho valor.
// Callbacks
// Gastos por semana:
//     4.Crea una función que calcule el total de gastos de cada semana y retorne un array con estos totales. 
//     En la posición 0 estará el gasto de la semana 0, en la posición 1 el gasto de la semana 1, etc. Será obligatorio el uso de callbacks para esta función.
let matrizGastos = [
    [1,2,3,4,5,6,7], //semana 1
    [1000,2200,340000,40000,500,60,70], //semana 2
    [1,2,3,4,5,6,7], //semana 3
    [1,2,3,4,5,6,7] //semana 4
];

// Gastos de la semana
function gastosSemanales(matriz,numSemana) {
    let contadorGastos = 0;
    for (let i = 0; i < matriz[numSemana].length; i++) {
        contadorGastos += matriz[numSemana-1][i];
    }
    return contadorGastos;
}
let sumaGastosSemanales = gastosSemanales(matrizGastos,2);
console.log("Los gastos de la semana 2 fueron: $"+sumaGastosSemanales);

// Gastos de un dia especifico de la semana
function gastosUnDiaSemana(matriz,numdia) {
    let contadorGastosDia = 0;
    for (let i = 0; i < matriz.length; i++) {
        contadorGastosDia += matriz[i][numdia-1];
    }
    return contadorGastosDia;
}
let sumaGastosDiaSemana = gastosUnDiaSemana(matrizGastos,6);
console.log("Los dias sabados del mes se gastó: $"+sumaGastosDiaSemana);
// Gasto total del mes
function gastoTotalMensual(matriz) {
    let contadorTotal = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            contadorTotal += matriz[i][j];
        }
    }
    return contadorTotal;
}

let gastoMensual = gastoTotalMensual(matrizGastos);
console.log("El gasto mensual fue: $"+gastoMensual);

// Callbacks
function calculoTotalGastosPorSemana(matriz,callbacks) {
    let totalGastosPorSemana = [];
    let gastosSemanales = 0;
    matriz.forEach(function (semana) {
         gastosSemanales = semana.reduce(function(total,dia){
           return total + dia;
        });
        totalGastosPorSemana.push(gastosSemanales);
    },0);
    callbacks(totalGastosPorSemana);
}
function mostrarResultados(resultados) {
    console.log("Total de gastos por semana: "+resultados);
}
calculoTotalGastosPorSemana(matrizGastos,mostrarResultados);
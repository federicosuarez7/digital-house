// Creamos una matriz
let matriz = [
            [1,"dos",3],
            ["cuatro",5,"seis"],
            [true,"ocho",9]];
// Imprimir por consola la matriz
console.table(matriz);
// Acceder a un elemnto especifico
console.log(matriz[1][2]);
// Modificar un elemento especifico
matriz [0][0] = "uno";
console.table(matriz);
// Recorrer las columnas de la matriz
for (let i = 0; i < matriz.length; i++) {
        console.log(`Recorremos la columna ${i} de la matriz`);
        console.table(matriz[i]);
}
// Recorrer las filas de la matriz
for (let i = 0; i < matriz[0].length; i++) {
    console.log(matriz[0][i]);
}



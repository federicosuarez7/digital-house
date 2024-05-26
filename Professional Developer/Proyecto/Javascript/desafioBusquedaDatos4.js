/*Obtener votos: Dado un array con los datos de una encuesta realizada sobre los temas musicales más populares 
—lo que se tiene en el array son objetos definidos con el nombre de un tema musical y cantidad de votos que 
obtuvo— crear el array con los datos de 5 temas y una cantidad de votos para cada uno. Los votos obtenidos 
deben estar desordenados. Una vez creado el array, se deberá escribir un algoritmo que, dado un tema,
 me informe cuántos votos obtuvo, considerando: 
 Resolver el desafio con busqueda lineal y luego con busqueda binaria*/
let tema1 = {
    genero:"Rock",
    votos: 32,
};
let tema2 = {
    genero:"Jazz",
    votos: 89,
};
let tema3 = {
    genero:"Folclore",
    votos: 26,
};
let tema4 = {
    genero:"Bachata",
    votos: 61,
};
let tema5 = {
    genero:"Trap",
    votos: 12,
};
// Busqueda lineal
let arreglo = [tema1,tema2,tema3,tema4,tema5];
 function contadorVotos(array,generoParametro){
    for (let i = 0; i < array.length; i++) {
        if (array[i].genero === generoParametro) {
            console.log("El género:"+array[i].genero+" tiene "+array[i].votos+" votos.");
        }
    }
 }
contadorVotos(arreglo,"Bachata");
//  Busqueda binaria

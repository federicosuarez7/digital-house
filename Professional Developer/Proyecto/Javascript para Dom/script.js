// Ciclo For of
// Me sirve para recorrer objetos iterables como arrays, strings, maps
let tecnologia = [ "Html","Javascript","Css","React Js"];
for (let tech of tecnologia) {
        console.log(tech)
}

// Ciclo forin
// Me sirve para recorrer las propiedades de los objetos
let persona = {
    nombre: "Federico",
    edad:34,
    ocupacion: "Comerciante"
}
for (let key in persona) {
    console.log(persona[key])
}

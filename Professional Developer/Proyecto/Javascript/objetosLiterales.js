// crear un objeto
let auto = {
    ruedas:4,
    motor:1600,
    pesoChasis:"1500 kg",
    confort:["AC","usb"]
};
let persona = {
    nombre: "Federico",
    apellido:"Suarez",
    edad:34,
    nacionalidad: "argentino",
    //metodos del objeto
    saludar: function saludo() {
        return "Hola como estas, soy " +this.nombre+"!!";
    }
};
// acceder a las propiedades de un objeto
console.log(auto);
console.log(auto.confort[0]);
console.log(persona.nacionalidad);
// cargar nuevas propiedades al  objeto
persona.deporteFavorito = "Futbol";
persona.edad = 35;
console.log(persona);
// eliminar propiedades del objeto
delete persona.deporteFavorito;
console.log(persona);
// acceder a los metodos del objeto
console.log(persona.saludar());
// palabra reservada this

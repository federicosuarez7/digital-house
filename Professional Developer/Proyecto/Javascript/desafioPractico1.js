// Crea una variable llamada "contraseña" donde guardes un valor especifico. Luego, crea una funcion que reciba por parametro un dato
// y utilizando operadores logicos y condicionales, verifica si dicho parametro coincide con la variable llamada "contraseña".
// La funcion debera mostrar por consola si la contraseña recibida es valida o no.
let contrasena = "seguridad";
let contador = 0;
function verifica(dato){
    if(contrasena===dato){
        console.log("La contraseña es válida");
        contador++;
    }
}
while(contador!=1){
    let dato = prompt("Ingrese la contraseña: ");
    verifica(dato);
}

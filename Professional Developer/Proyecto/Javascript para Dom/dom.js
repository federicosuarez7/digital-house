// Manipulamos etiquetas de html desde el DOM
const salutations = document.querySelectorAll("p.saludos"); 
document.getElementById("test").innerHTML = "Agregamos el primer saludo desde javascript: <br>" + 
salutations[0].innerHTML;

// Manipulamos el formulario desde el DOM
const form = document.forms["form1"];
let text = "";
for(let i=0; i<form.length;i++){
    text += form.elements[i].value + '<br>';
}

document.getElementById('test2').innerHTML = text;

// Eventos
// Declarative function
function changeThisElement(element) {
    element.innerHTML = "Saludando desde funcion declarativa";
}
// Arrow function
const changeThisElement2 = (element) => element.innerHTML = "Saludando desde funcion flecha";


const displayDate = () => document.getElementById('test3').innerHTML = Date();
// No abro y cierro parentesis porque quiero que se ejecute cuando se de la accion
document.getElementById('btn').onclick = displayDate

const checkCookies = () => {
    let text = navigator.cookieEnabled ? 'Las cookies estan habilitadas' : 'Las cookies no estan habilitadas';
    document.getElementById('test4').innerHTML = text;
}

const upperCase = () => {
    const input = document.getElementById('apodo');
    input.value = input.value.toUpperCase();
}

const mouseOver = (element) => {
    element.innerHTML = 'Estas adentro de la caja';
}
const mouseOut = (element) => {
    element.innerHTML = 'Estas fuera de la caja';

}
// Eventos de teclado
const keydown = ($event)=>{
    const key = $event.key;
    console.log(key);
}
// Manipular nodos en el DOM
// Creamos un parrafo
const paragraph = document.createElement('p');
// Creamos un nodo de texto
const node = document.createTextNode("Este es contenido creado desde el DOM");
// Incorporamos el elemento de texto al nodo de parrafo
paragraph.appendChild(node);
// En la variable container tenemos el div
const container = document.getElementById('div1');
const p1 = document.getElementById('p1');
// Colocamos el nuevo contenido antes del p1
container.insertBefore(paragraph,p1);
// Eliminamos un nodo
// Primero seleccionamos el elemento a eliminar
const p2 = document.getElementById('p2');
p2.remove();
// Reemplazamos un nodo
const p3 = document.getElementById('p3');
container.replaceChild(p5,p3);

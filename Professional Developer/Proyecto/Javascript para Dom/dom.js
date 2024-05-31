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
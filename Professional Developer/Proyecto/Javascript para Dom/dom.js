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
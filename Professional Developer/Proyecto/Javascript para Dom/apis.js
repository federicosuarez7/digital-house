// Geolocalizacion browser web api
const geolocation = document.getElementById('ubicacion');

const showPosition = position =>{
    geolocation.innerHTML = "Latitud: "+ position.coords.latitude + 
    "<br>La longitud es: "+ position.coords.longitude;
}

const getLocation = () =>{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        ubicacion.innerHTML = "La geolocalizacion esta desactivada";
    }
}

// Browser web apis: Form
const doValidation = () => {
    const number = document.getElementById('number');
    document.getElementById('error').innerHTML = number.checkVisibility()
    ? "El numero es correcto" : number.validationMessage;
}

// Browser web apis: History
const goBackx2 = () => window.history.go(-2);
const goBack = () => window.history.back(); 
const goForwardx2 = () => window.history.go(2);
const goForward = () => window.history.forward();

// LocalStorage
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const job = document.getElementById('job');

document.getElementById('welcome').innerHTML = localStorage.getItem('username') 
== null ? '':'Bienvenido/a '+localStorage.getItem('username');


const save = () => {
    localStorage.setItem('username',firstname.value + ' '+ lastname.value);
    localStorage.setItem('job',job.value);
}
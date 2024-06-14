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
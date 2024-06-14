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
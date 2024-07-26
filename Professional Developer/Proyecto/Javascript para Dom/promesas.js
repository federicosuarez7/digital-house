const miPromesa = new Promise ((resolve, reject) =>{
    setTimeout(()=>{
        const succes = false;
        if (succes) {
            resolve('Esta operacion ha sido exitosa');
        }else{
            reject('Ha fallado la operacion');
        }
    },5000);
})
document.getElementById('loading').innerHTML = 'Cargando...';

miPromesa.then(respuesta =>{
    document.getElementById('loading').innerHTML = '';
    document.getElementById('loading').innerHTML = respuesta;
}).catch(error =>{
    document.getElementById('loading').innerHTML = '';
    document.getElementById('loading').innerHTML = error;
    
})
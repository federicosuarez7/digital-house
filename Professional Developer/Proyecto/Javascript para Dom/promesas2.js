const promise1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('Respuesta de la promesa 1');
    },5000);
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('Respuesta de la promesa 2');
    },2000);
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('Respuesta de la promesa 3');
    },3000);
})

promise1.then(resolve =>{
    console.log(resolve)
})
promise2.then(resolve =>{
    console.log(resolve)
})
promise3.then(resolve =>{
    console.log(resolve)
})

// Ahora manejamos las promesas de forma secuencial con promise all
Promise.all([promise1,promise2,promise3]).then(resolve=>{
    console.log(resolve[0]);
    console.log(resolve[1]);
    console.log(resolve[2]);
}).catch(error =>{
    console.log(error);
})
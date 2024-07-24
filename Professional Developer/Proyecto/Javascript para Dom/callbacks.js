const users = ['Admin','Seller','Product Owner'];
const sendNotifications = (userName) => {
    console.log(`¿Como estas ${userName},te enviamos una notificación`);
}

function sentToUser(array, action) {
    array.map(e => action(e));
    console.log('La tarea ha terminado');
}

sentToUser(users, sendNotifications);

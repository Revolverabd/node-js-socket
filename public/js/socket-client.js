const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMessaje = document.querySelector('#txtMessaje');
const btnEnviar = document.querySelector('#btnEnviar');


const socketClient = io();


socketClient.on('connect', () => {

    // console.log('Conectado');

    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socketClient.on('disconnect', () => {

    // console.log('Desconectado del servidor');

    lblOnline.style.display = 'none';
    lblOffline.style.display = '';

});

socketClient.on('enviar-mensaje', (payload) => {

    console.log(payload);

});


btnEnviar.addEventListener('click', () => {

    const mensaje = txtMessaje.value;

    const payload = {
        mensaje,
        id: 'ksjdds',
        fecha: new Date().getTime()
    }

    socketClient.emit('enviar-mensaje', payload, (id) => {
        console.log('desde el server', id);
    });

})
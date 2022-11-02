import { io } from 'socket.io-client';
export const socket = io('https://whatsapp-ba.herokuapp.com:5000',{ transports: ['websocket', "polling", "flashsocket"], extraHeaders: {"my-custom-header": 'abas'} });
export let socketID = '';
socket.on('connect', () => {
    
    console.log(socket.id)
    socketID = socket.id
})
import { io } from 'socket.io-client';
export const socket = io('https://whatsapp-ba.herokuapp.com:8000',{ transports: ['websocket', 'polling', 'flashsocket'] });
export let socketID = '';
socket.on('connect', () => {
    console.log(socket.id)
    socketID = socket.id
})
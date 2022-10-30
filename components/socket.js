import { io } from 'socket.io-client';
export const socket = io('https://whatsapp-ba.herokuapp.com');
export let socketID = '';
socket.on('connect', () => {
    console.log(socket.id)
    socketID = socket.id
})
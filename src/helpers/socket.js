import {io} from 'socket.io-client';

const URL = `${process.env.REACT_APP_URL_WS}`;
const socket = io(URL);

socket.onAny((event, ...args) => {
    console.log(event, args);
})

export default socket
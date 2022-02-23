// import internal modules
import React, {useEffect} from "react";
import {io} from "socket.io-client";

// import external modules
import Router from './config/Router'

// create function for App.js
function App() {
  useEffect(() => {
    const socket = io("http://localhost:4001")
    console.log(socket)
  }, [])
  return (
    <Router />
  );
}

export default App;

// import internal modules
import React, {useEffect} from "react";
import socket from "./helpers/socket"

// import external modules
import Router from './config/Router'

// create function for App.js
function App() {
  // useEffect(() => {
  //   socket.on('message for new user', (message) => {
  //     alert(message)
  //   })
  // }, [])
  return (
    <Router />
  );
}

export default App;

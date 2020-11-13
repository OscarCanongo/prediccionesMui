import React from 'react';
import './Prediccion.css';
import Terminal from 'terminal-in-react';
const Prediccion = () => {

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
      <Terminal color='green'
          backgroundColor='black'
          barColor='black'
          style={{ fontWeight: "bold", fontSize: "1em" }}
          commands={{ 'open-google': () => window.open("https://www.google.com/", "_blank") }}
          hideTopBar='false' />
      </div>
    );
}

export default Prediccion;
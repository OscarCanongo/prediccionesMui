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
          backgroundColor='#0b0c0b'
          barColor='black'
          commands={{ 'open-google': () => window.open("https://www.google.com/", "_blank")}} />
      </div>
    );
}

export default Prediccion;
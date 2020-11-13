import React from 'react';
import './Prediccion.css';
import Terminal from 'terminal-in-react';

const Prediccion = () => {

    return (
      <Terminal commands={{ 'open-google': () => window.open("https://www.google.com/", "_blank")}} />
    );
}

export default Prediccion;
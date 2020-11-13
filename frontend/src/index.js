import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MatrixParallax from 'react-matrix-parallax'
import Terminal from 'terminal-in-react';

ReactDOM.render(
  <React.StrictMode>
    <MatrixParallax color='rgba(37, 218, 28, 0.87)' backgroundColor='rgba(0,0,0,1)'>
    <Terminal commands={{ 'open-google': "https://www.google.com/"}} />
    </MatrixParallax>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

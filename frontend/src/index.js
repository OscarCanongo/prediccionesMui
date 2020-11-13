import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MatrixParallax from 'react-matrix-parallax'

ReactDOM.render(
  <React.StrictMode>
    <MatrixParallax color='rgba(122, 229, 114, 0.87)' backgroundColor='rgba(0,0,0,1)'>
    </MatrixParallax>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

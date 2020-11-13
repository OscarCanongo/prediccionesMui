import './App.css';
import Prediccion from './components/Prediccion/Prediccion';
import React, { Fragment } from "react";
//import Matrix from './components/Matrix/Matrix';
import MatrixParallax from 'react-matrix-parallax'
function App() {
  return (
    <>
      <div className="App">
        <Fragment>
          <MatrixParallax color='rgba(37, 218, 28, 0.87)' backgroundColor='rgba(0,0,0,1)'>
    
          <Prediccion/>
          </MatrixParallax>
        </Fragment>
        
      </div>

    </>
  );
}

export default App;

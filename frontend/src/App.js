import './App.css';
import Prediccion from './components/Prediccion/Prediccion';
import React, { Fragment } from "react";
import MatrixParallax from "react-matrix-parallax";

function App() {
  return (
    <>
      <div className="App">
        <Fragment>
          <Prediccion/>
        </Fragment>
        <React.Fragment>
          <MatrixParallax
            color="rgba(122, 229, 114, 0.87)"
            backgroundColor="rgba(0,0,0,1)"
          >
          </MatrixParallax>
        </React.Fragment>
        
      </div>

    </>
  );
}

export default App;

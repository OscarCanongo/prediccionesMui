import './App.css';
import Prediccion from './components/Prediccion/Prediccion';
import React, { Fragment } from "react";
import Matrix from './components/Matrix/Matrix';

function App() {
  return (
    <>
      <div className="App">
        <Fragment>
          <Matrix/>
          <Prediccion/>
        </Fragment>
        
      </div>

    </>
  );
}

export default App;

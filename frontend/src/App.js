import './App.css';
import Prediccion from './components/Prediccion/Prediccion';
import React, { Fragment } from "react";
//import Matrix from './components/Matrix/Matrix';
import MatrixParallax from 'react-matrix-parallax'
import MatrixBackground from './components/MyMatrix/matrix-background'





function App() {
    return ( <
        >
        <
        div className = "App" >
        <
        Fragment >
        <
        MatrixBackground color = 'rgba(37, 218, 28, 0.87)'
        backgroundColor = 'rgba(0,0,0,1)' >

        <
        Prediccion / >
        <
        /MatrixBackground> <
        /Fragment>

        <
        /div>

        <
        />
    );
}

export default App;
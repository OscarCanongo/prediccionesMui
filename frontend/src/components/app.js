import React from 'react';
import MatrixBackground from './MyMatrix/matrix-background';
import Prediccion from './Prediccion/Prediccion';

const app = () => {
    return (  
        <>
            < MatrixBackground color = 'rgba(37, 218, 28, 0.87)'
                backgroundColor = 'rgba(0,0,0,1)' >        
            < Prediccion />
            </MatrixBackground> 
        </>
    );
}
 
export default app;

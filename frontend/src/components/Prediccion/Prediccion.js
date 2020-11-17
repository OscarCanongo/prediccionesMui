import React, {useState, useEffect} from 'react';
import './Prediccion.css';
import Terminal from 'terminal-in-react';
import clienteAxios from '../../config/axios';

const Prediccion = () => {

  const[data, setData] = useState([]);

    useEffect(() => {

        const getPrediccion = async () => {
            const response = await clienteAxios.post('/predicciones/prediccion',
              {
                date : 2040,
                location: "Mexico"
              }
            );
            setData(response.data.prediccion[0].text);
        }

        getPrediccion();
        // eslint-disable-next-line
    }, []);

    return (
      <>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "left",
          height: "100vh",
          width: "100vh"
        }}
      >
        <h1>{data}</h1>
      <Terminal color='green'
          backgroundColor='black'
          barColor='black'
          style={{ fontWeight: "bold", fontSize: "1em" }}
          commands={{ 'open-google': () => window.open("https://www.google.com/", "_blank") }}
          hideTopBar='false'/>
      </div>
      </>
    );
}

export default Prediccion;
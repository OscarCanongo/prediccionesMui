import React, {useState, useEffect, Fragment} from 'react';
import './Prediccion.css';
import clienteAxios from '../../config/axios';
import {Col, Container, Row } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
const Prediccion = () => {

  //Bandera
  const [showPrediction, setShowPrediction] = useState(false);
  const [showName, setShowName] = useState(true);
  const [showAge, setShowAge] = useState(false);
  const [showGenre, setShowGenre] = useState(false);
  const [showPosition, setShowPosition] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showYear, setShowYear] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  //Datos
  const[data, setData] = useState('');

  //usuarios
  const [usuario, setUsuario] = useState({
        nombre: '',
        edad: 0,
        posicion: '',
        genero: ''
    });

  //Prediccion
  const [prediccion, setPrediccion] = useState({
        year: 0,
        location: ''
    });


    //Use Effect
    useEffect(() => {
      //console.log("ENTRA");
    },[showPrediction, showName, showAge, showGenre, showPosition, showLocation, showYear, showConfirmation]);

    //Cuando el usuaro quiere iniciar sesion
    const onSubmit = async (e) => {
      if (e.key === "Enter") {
        const resp = e.target.value;
        if(resp === 'si'){
          setShowPrediction(true);
          if(usuario.posicion.toLowerCase() === 'alto'){
            usuario.posicion = 3;
          } else if (usuario.posicion.toLowerCase === 'medio'){
            usuario.posicion = 2;
          } else {
            usuario.posicion = 1;
          }
          if(usuario.genero.toLowerCase() === 'masculino'){
            usuario.genero = 1;
          } else {
            usuario.genero = 2;
          }
          const response = await clienteAxios.post('usuarios',
            {
              nombre : usuario.nombre,
              edad : usuario.edad,
              posicion: usuario.posicion,
              genero: usuario.genero
            }
          );
          console.log(response);
          const response1 = await clienteAxios.post('/predicciones/prediccion',
          {
            date : prediccion.year,
            location: prediccion.location
          }
           );
           setData(response1.data.prediccion[0].text);
        }
      }
    }

    const setValue = e =>{
      if (e.key === "Enter") {
        setUsuario({
          ...usuario,
          [e.target.name]: e.target.value
        })
        if (e.target.name === 'nombre' && usuario.nombre.length>1) {
          console.log("ENTRA ADENTRO DEL IF")
            setShowName(false);
            setShowAge(true); 
        } else if (e.target.name === 'edad'){
          if (usuario.edad && usuario.edad>0) {
            setShowAge(false);
            setShowGenre(true); 
          }
        } else if (e.target.name === 'genero'){
          if (usuario.genero && (usuario.genero==='masculino' || usuario.genero==='femenino')) {
            setShowGenre(false);
            setShowPosition(true); 
          }
        } else if (e.target.name === 'posicion'){
          if (usuario.genero && (
            usuario.posicion==='alto' || 
            usuario.posicion==='medio' ||
            usuario.posicion==='bajo'
          )) {
            setShowPosition(false);
            setShowLocation(true); 
          }
        } 
      }
    }

    const setValuePrediccion = e =>{
      if (e.key === "Enter") {
        console.log(e.target.name)
        setPrediccion({
          ...prediccion,
          [e.target.name]: e.target.value
        })
        if (e.target.name === 'location'){
          if (prediccion.location && (
            prediccion.location.toLowerCase()==='mexico' || 
            prediccion.location.toLowerCase()==='mundo' 
            )) {
              setShowLocation(false);
              setShowYear(true);
          }
        } else if (e.target.name === 'year'){
          if (prediccion.year && (
            prediccion.year === '2030' || 
            prediccion.year=== '2040' 
            )) {
              setShowYear(false);
              setShowConfirmation(true);
          }
        }
      }
    }

    return (
      <>
      <div
        className = "matrix"
      >
        <Container fluid="md">
          <Row>
          {
          (!showPrediction)?
            <>
            <Col xs = {3} md={3} lg={3}>
            </Col>
            <Col md={6} lg={6}>
                <div className="cmd">
                  {
                    (showName) 
                    ?(
                      <>
                    <div className="line"> 
                      <span className="header">
                        &#36; root&#64;M.U.I&#62; Llene el formulario para conocer el futuro
                      </span>
                    </div>
                    <div className="line"> 
                      <span className="header">
                        &#36; root&#64;M.U.I&#62; Doble enter para confirmar nombre
                      </span>
                    </div>
                    <div className="line"> 
                      <span className="header">
                      &#36; root&#64;M.U.I&#62;
                      </span>
                    </div>
                    <div className="line"> 
                      <span className="header">
                      &#36; Nombre:
                      </span>
                      <div className="code">
                        <input type="text" name="nombre" id="textinput" onKeyPress={setValue}/>
                      </div>
                    </div>
                    </>
                    ) : null
                  }
                  {
                    (showAge)?(
                    <div>
                      <div className="line"> 
                        <span className="header">
                          &#36; {usuario.nombre}&#64;M.U.I&#62; Leyendo nombre...
                        </span>
                      </div>
                      <div className="line"> 
                        <span className="header">
                          &#36; {usuario.nombre}&#64;M.U.I&#62; Doble enter para confirmar edad
                        </span>
                      </div>
                      <div className="line"> 
                        <span className="header">
                        &#36; Edad:
                        </span>
                        <div className="code">
                          <input type="text" name="edad" id="textinput" onKeyPress={setValue}/>
                        </div>
                      </div>
                    </div>
                    ):null
                  }
                  {
                    (showGenre)?(
                    <div>
                      <div className="line"> 
                        <span className="header">
                          &#36; {usuario.nombre}&#64;M.U.I&#62; Leyendo edad...
                        </span>
                      </div>
                      <div className="line"> 
                        <span className="header">
                          &#36; {usuario.nombre}&#64;M.U.I&#62; Doble enter para confirmar género
                        </span>
                      </div>
                      <div className="line"> 
                        <span className="header">
                        &#36; Género (masculino o femenino):
                        </span>
                        <div className="code">
                          <input type="text" name="genero" id="textinput" onKeyPress={setValue}/>
                        </div>
                      </div>
                    </div>
                    ):null
                  }
                  {
                    (showPosition)?(
                    <div>
                      <div className="line"> 
                        <span className="header">
                          &#36; {usuario.nombre}&#64;M.U.I&#62; Leyendo género...
                        </span>
                      </div>
                      <div className="line"> 
                        <span className="header">
                          &#36; {usuario.nombre}&#64;M.U.I&#62; Doble enter para confirmar posición
                        </span>
                      </div>
                      <div className="line"> 
                        <span className="header">
                        &#36; Posición socioeconómica (alto, bajo o medio):
                        </span>
                        <div className="code">
                          <input type="text" name="posicion" id="textinput" onKeyPress={setValue}/>
                        </div>
                      </div>
                    </div>
                    ):null
                  }
                  {
                    (showLocation)?
                    (
                      <div>
                        <div className="line"> 
                          <span className="header">
                            &#36; {usuario.nombre}&#64;M.U.I&#62; Leyendo posición...
                          </span>
                        </div>
                        <div className="line"> 
                          <span className="header">
                            &#36; {usuario.nombre}&#64;M.U.I&#62; Doble enter para confirmar 
                          </span>
                        </div>
                        <div className="line"> 
                          <span className="header">
                          &#36; Predicción (Mexico o Mundo):
                          </span>
                          <div className="code">
                            <input type="text" name="location" id="textinput" onKeyPress={setValuePrediccion}/>
                          </div>
                        </div>
                      </div>
                    ):null
                  }
                  {
                    (showYear)?
                    (
                      <div>
                        <div className="line"> 
                          <span className="header">
                            &#36; {usuario.nombre}&#64;M.U.I&#62; Leyendo hubicación...
                          </span>
                        </div>
                        <div className="line"> 
                          <span className="header">
                            &#36; {usuario.nombre}&#64;M.U.I&#62; Doble enter para confirmar año
                          </span>
                        </div>
                        <div className="line"> 
                          <span className="header">
                          &#36; Año (2030 o 2040):
                          </span>
                          <div className="code">
                            <input type="text" name="year" id="textinput" onKeyPress={setValuePrediccion}/>
                          </div>
                        </div>
                      </div>
                    ):null
                    }
                    {
                    (showConfirmation)?
                    (
                      <div>
                        <div className="line"> 
                          <span className="header">
                            &#36; {usuario.nombre}&#64;M.U.I&#62; Leyendo año...
                          </span>
                        </div>
                        <div className="line"> 
                        <span className="header">
                          &#36; {usuario.nombre}&#64;M.U.I&#62;
                        </span>
                      </div>
                      <div className="line"> 
                        <span className="header">
                        &#36; ¿Desea guardar los datos de usuario? (si o no):
                        </span>
                        <div className="code">
                          <input type="text" name="send" id="textinput" onKeyPress={onSubmit}/>
                        </div>
                      </div>
                      </div>
                    ):null
                    }
                </div> 
            </Col>
            </>
            : 
            <Col md={6} lg={6}>
              {
                data.length > 0 ?
                 <div className="cmd">
                    <div className="line"> 
                      <span className="header">
                        Predicción para {prediccion.location}, el {prediccion.year}:
                      </span>
                      <br></br>
                      <div className="code" style={{fontWeight: "bold", margin: '20px 0px'}}>
                        {data}
                      </div>
                    </div>
                  </div>
                :  <div className="cmd">
                    <div className="line"> 
                      <span className="header">
                        Predicción para {prediccion.location}, el {prediccion.year}:
                      </span>
                      <br></br>
                      <div className="code" style={{fontWeight: "bold", margin: '20px 0px'}}>
                        Cargando predicción ....
                      </div>
                    </div>
                  </div>
              }
            </Col>
          }
          </Row>
        </Container>
      </div>
      </>
    );
}

export default Prediccion;

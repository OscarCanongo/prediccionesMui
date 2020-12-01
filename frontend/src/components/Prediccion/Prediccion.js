import React, {useState, useEffect, Fragment} from 'react';
import './Prediccion.css';
import Terminal from 'terminal-in-react';
import clienteAxios from '../../config/axios';
import {Button, Form, Container, Row } from 'react-bootstrap';
import { green, lightGreen} from '@material-ui/core/colors';
import { useForm } from 'react-hook-form'


import 'bootstrap/dist/css/bootstrap.min.css';
const Prediccion = () => {

  //Datos
  const[data, setData] = useState([]);

  //usuarios
  const [usuario, setUsuario] = useState({
        nombre: '',
        edad: 18,
        posicion: 0,
        genero: 0
    });

  //Prediccion
  const [prediccion, setPrediccion] = useState({
        year: 2040,
        location: 'Mexico'
    });

    //Extraer de de usuario
    const {nombre, edad, posicion, genero} = usuario;

    //Extraer de de prediccion
    const {year, location} = usuario;

    const onChange = (e) =>{
      setUsuario({
          ...usuario,
          [e.target.name] : e.target.value
      })
    };

    const onChange1 = (e) =>{
      setPrediccion({
          ...prediccion,
          [e.target.name] : e.target.value
      })
    };

    useEffect(() => {
        const getPrediccion = async () => {
            const response = await clienteAxios.post('/predicciones/prediccion',
              {
                date : prediccion.year,
                location: prediccion.location
              }
            );
            setData(response.data.prediccion[0].text);
        }

        getPrediccion();
        // eslint-disable-next-line
    }, []);

    const {register, errors, handleSubmit} = useForm();

    //Cuando el usuaro quiere iniciar sesion
    const onSubmit = e => {
      e.preventDefault();

      console.log({usuario});
    }

    const onSubmit1 = e => {
      e.preventDefault();

      console.log({prediccion});
    }

    return (
      <>
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: "100vh"
        }}
      >

        <Container className="">
          <div className="cmd">
            <div className="line"> 
              <span className="header">
                &#36; root&#62;
              </span>
              <div className="code">
                Llene el formulario para conocer el futuro
              </div>
            </div>
            <div className="line"> 
              <span className="header">
                &#36; root&#62;
              </span>
              <div className="code">
                cargando datos...
              </div>
            </div>
            <div className="line"> 
              <span className="header">
                &#36; Introduzca nombre&#62;
              </span>
              <div className="code">
                Nombre
              </div>
            </div>
          </div>

          <br></br>

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

        {/* <form onSubmit={onSubmit}>
        <div>Llene el formulario para conocer el futuro</div>
        <p>Escribe tu nombre</p>
            <input
                placeholder="Nombre"
                className="form-control sm-4"
                id="nombre"
                name="nombre"
                ref={register({
                    required: {
                        value: true,
                        message: 'Nombre es requerido'
                        },
                    maxLength: {
                        value: 5,
                        message: 'No más de 5 carácteres!'
                        },
                    minLength: {
                        value: 2,
                        message: 'Mínimo 2 carácteres'
                        }
                })}
                value = {nombre}
                onChange = {onChange}
            ></input>
            <p>Escribe tu edad</p>
            <input
                placeholder="Edad"
                className="form-control sm-4"
                type="number"
                id="edad"
                name="edad"
                ref={register({
                    required: {
                        value: true,
                        message: 'Nombre es requerido'
                        },
                    maxLength: {
                        value: 5,
                        message: 'No más de 5 carácteres!'
                        },
                    minLength: {
                        value: 2,
                        message: 'Mínimo 2 carácteres'
                        }
                })}
                value = {edad}
                onChange = {onChange}
            ></input>
            <label for="posicion">Seleccione nivel socioeconomico:</label>
                <select id="posicion" name="posicion" onChange={onChange} value={posicion}>
                    <option value="">Seleccione</option>
                    <option value="1">Bajo</option>
                    <option value="2">Medio</option>
                    <option value="3">Alto</option>
                </select>
                <label for="genero">Seleccione genero:</label>
                    <select id="genero" name="genero" onChange={onChange} value={genero}>
                        <option value="">Seleccione</option>
                        <option value="1">Hombre</option>
                        <option value="2">Mujer</option>
                      </select>
            <button  type="submit" className="btn btn-success">
                Enviar
            </button>
        </form>
        <form onSubmit={onSubmit1}>
        <h3>Que tipo de prediccion quieres?</h3>
                    <select id="location" name="location" onChange={onChange1} value={location}>
                        <option value="">Seleccione</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Mundo">Mundo</option>
                      </select>
                      <label for="year">Seleccione un año:</label>
                      <select id="year" name="year" onChange={onChange1} value={year}>
                          <option value="">Seleccione</option>
                          <option value="2030">2030</option>
                          <option value="2040">2040</option>
                      </select>
            <button  type="submit" className="btn btn-success">
                Enviar
            </button>
        </form> */}

        </Container>
      </div>
      </>
    );
}

export default Prediccion;

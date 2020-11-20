import React, {useState, useEffect} from 'react';
import './Prediccion.css';
import Terminal from 'terminal-in-react';
import clienteAxios from '../../config/axios';
import { Button, Form, Container, Row } from 'react-bootstrap';
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
       
    <Container>
      <Row>
      <h1>{data}</h1>
      </Row>
      <Row>
        <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control placeholder="Nombre" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Correo electronico</Form.Label>
            <Form.Control placeholder="Correo" />
          </Form.Group>
          <Button variant="primary">Primary</Button>
        </Form>
      </Row>
</Container>
      </div>
      </>
    );
}

export default Prediccion;
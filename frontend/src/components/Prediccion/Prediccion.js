import React, {useState, useEffect} from 'react';
import './Prediccion.css';
import Terminal from 'terminal-in-react';
import clienteAxios from '../../config/axios';
import { Form, Container, Row } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green} from '@material-ui/core/colors';
import PropTypes from "prop-types";
import { TextField } from '@material-ui/core';
const Prediccion = () => {

  const[data, setData] = useState([]);
  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });
  
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
        <Form.Group >
            <Form.Label>Nombre</Form.Label>
            <Form.Control placeholder="Nombre" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Edad</Form.Label>
            <Form.Control as="select">
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
              <option>28</option>
              <option>29</option>
              <option>30</option>
              <option>31</option>
              <option>32</option>
              <option>33</option>
              <option>34</option>
              <option>35</option>
              <option>36</option>
              <option>37</option>
              <option>38</option>
              <option>39</option>
              <option>40</option>
              <option>41</option>
              <option>42</option>
              <option>43</option>
              <option>44</option>
              <option>45</option>
              <option>46</option>
              <option>47</option>
              <option>48</option>
              <option>49</option>
              <option>50</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Posición Social</Form.Label>
            <Form.Control as="select">
              <option>Baja</option>
              <option>Media</option>
              <option>Alta</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Edad</Form.Label>
            <Form.Control as="select">
              <option>Mujer</option>
              <option>Hombre</option>
            </Form.Control>
          </Form.Group>
          <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary">
          Aceptar
        </Button>
      </ThemeProvider>
        </Form>
      </Row>
</Container>
      </div>
      </>
    );
}

export default Prediccion;
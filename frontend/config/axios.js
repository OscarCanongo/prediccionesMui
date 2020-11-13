import axios from 'axios';

const clienteAxios = axios.create({
    baseURL : "https://murmuring-wave-91481.herokuapp.com/"
});

export default clienteAxios;
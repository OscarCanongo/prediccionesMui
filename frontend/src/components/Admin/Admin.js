import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import clienteAxios from '../../config/axios';
import Logo from '../../images/mui.png'

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#3B83BD',
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

const Admin = () => {

  const [data, setData] = useState([]);
  const classes = useStyles();
  
  useEffect(() => {

    const getUsers = async () => {
        const response = await clienteAxios.get('/usuarios');
        setData(response.data.usuarios);
    }

    getUsers();
    // eslint-disable-next-line
    }, []);


  return (  
    <TableContainer component={Paper}>
      <img src={Logo} width = "10%"/>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell align="right">Edad</StyledTableCell>
            <StyledTableCell align="right">Posición Social</StyledTableCell>
            <StyledTableCell align="right">Género</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row.nombre}
              </StyledTableCell>
              <StyledTableCell align="right">{row.edad}</StyledTableCell>
              {
                row.posicion === 1 ? row.posicion = "Baja"
                : row.posicion === 2 ? row.posicion = "Media"
                : row.posicion === 3 ? row.posicion = "Alta"
                : null
              }
              <StyledTableCell align="right">{row.posicion}</StyledTableCell>
              {
                row.genero === 1 ? row.genero = "Hombre"
                : row.genero === 2 ? row.genero = "Mujer"
                : null
              }
              <StyledTableCell align="right">{row.genero}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
 
export default Admin;


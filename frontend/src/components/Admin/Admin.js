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
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('El Benny', 25, "Americanista", "Vato"),
    createData('El Chemo', 27, "Le va a los Pumas", "No binario"),
    createData('El Oscar', 22, "PURO AZUL", "Vato"),
    createData('Abi', 23, "Dueña de Cordoba", "Mujer"),
    createData('Fer', 22, "Dueña de CAXA", "Mujer")
  ];
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

const Admin = () => {

  const [data, setData] = useState({});
  const classes = useStyles();
  
  useEffect(() => {

    const getUsers = async () => {
        const response = await clienteAxios.get('/usuarios');
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
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
 
export default Admin;


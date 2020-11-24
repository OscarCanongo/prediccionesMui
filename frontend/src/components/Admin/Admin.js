import React, { useState, useEffect, useContext } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import clienteAxios from '../../config/axios';
import Logo from '../../images/mui.png';
import AuthContext from '../../context/authentication/authContext';
import CsvDownloader from 'react-csv-downloader';
import Grid from '@material-ui/core/Grid';


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
  
  //Extraer la informacion de autenticacion
  const authContext = useContext(AuthContext);
  const { usuarioAutenticado, autenticado } = authContext;

  useEffect(() => {
    usuarioAutenticado();
    //eslint-disable-next-line
  }, []);

  const columns = [{
    id: 'nombre',
    displayName: 'Nombre'
  }, {
    id: 'edad',
    displayName: 'Edad'
  }, {
    id: 'posicion',
    displayName: 'Posición Social'
  }, {
    id: 'genero',
    displayName: 'Género'
  }];


  return (  
    <>
    { !autenticado ? ( <h1>USUARIO NO VALIDO</h1>) : (
      <>
      <TableContainer component={Paper}>
                <Grid item xs>
                 <img src={Logo} width = "10%"/>
                </Grid>
          <Grid container>
            <Grid xs = {11}>

            </Grid>
            <Grid xs={1}>
                <CsvDownloader
                  filename="usuarios"
                  separator=";"
                  wrapColumnChar=""
                  columns={columns}
                  datas={data}
                  text="DESCARGAR"/>
                </Grid>
          </Grid>
        
        </TableContainer>
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
      </>
    )}
    </>
  );
}
 
export default Admin;


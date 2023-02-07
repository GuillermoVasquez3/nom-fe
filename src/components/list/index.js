import { Button, Container, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ThemeProvider } from "@mui/material";
import Appbar from "../appbar";
import Footer from "../footer";
import CloseIcon from "@mui/icons-material/Close";
import Products from "../products";
import { products } from "../../data";
import { ListImage } from "../../style/products";
import { HttpClient } from "../axio";
import qs from 'querystring';




export default function List() {



    const test = (event) => {

        // const data = new FormData(event.currentTarget);
        // console.log({
        //     nombreLista: data.get('nombreLista'),
        // });

        const datos = {
            nombreLista: "primera"//data.get('nombreLista'),
        }

        const headers =
            { 'Content-Type': 'application/x-www-form-urlencoded' }

        HttpClient.post('/lista-deseo/guardar', qs.stringify(datos), headers)
    }


    return (



        <>

            <Button onClick={test}>aca</Button>
            <Container maxWidth="xl" align="center" sx={{ background: '#fff' }}>
                <Appbar />
                <TableContainer sx={{ maxWidth: 900 }} component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell align="right">Nombre</TableCell>
                                <TableCell align="right">Precio</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map((products) => (
                                <TableRow
                                    key={products.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <ListImage src={products.image} />
                                    </TableCell>
                                    <TableCell align="right">{products.name}</TableCell>
                                    <TableCell align="right">{products.price}</TableCell>
                                    <TableCell align="right">
                                        <IconButton>
                                            <CloseIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Footer />
            </Container>
        </>
    );
}
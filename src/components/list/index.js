import { Button, Container, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Appbar from "../appbar";
import Footer from "../footer";
import CloseIcon from "@mui/icons-material/Close";
//import { products } from "../../data";
import { ListImage } from "../../style/products";
import { useState } from "react";




export default function List() {

    let productsStorage = JSON.parse(localStorage.getItem('listaProductos'));

    const [products, setProducts] = useState(productsStorage)
    const [nombre, setNombre] = useState(1)

    const handleDeleteToList = (product) => {
        let productsFilter = products.filter((productFilter) => productFilter.id != product.id)
        setProducts(productsFilter)
        localStorage.setItem('listaProductos', JSON.stringify(productsFilter))
        setNombre(o=>o+1)

    }

    return (



        <>
            <Container id={nombre} maxWidth="xl" align="center" sx={{ background: '#fff' }}>
                <Appbar />
                <TableContainer sx={{ maxWidth: 900, minHeight: 800 }}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell align="right">Nombre</TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map((products) => (
                                <TableRow
                                    key={products.nombre}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <ListImage src={"http://localhost:8080/images/" + products.image} />
                                    </TableCell>
                                    <TableCell align="right">{products.nombre}</TableCell>
                                    <TableCell align="right">{products.price}</TableCell>
                                    <TableCell align="right">
                                        <IconButton onClick= { () => handleDeleteToList(products)}>
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
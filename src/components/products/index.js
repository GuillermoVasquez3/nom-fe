import { useTheme } from "@mui/material/styles";
import { Grid, useMediaQuery } from "@mui/material";
import { products } from "../../data";
import { Container } from "@mui/system";
import SingleProduct from "./SingleProduct";
import SingleProductDesktop from "./SingleProductDesktop";
import { useEffect, useState } from "react";

export default function Products() {


    const [productos, setProductos] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/productos/mostrar")
            .then(res => res.json())
            .then(
                (data) => {
                    setProductos(data)
                },
                (error) => {
                    console.log(error)
                }
            )
    }, [])


    const theme = useTheme();
    const matches =
        useMediaQuery(theme.breakpoints.down('md'));

    const renderProducts = productos.map(product => (
        <Grid
            item
            key={product.id}
            xs={2}
            sm={3}
            md={4}
            display="flex"
            flexDirection={'column'}
            alignItems="center"
        >
            {matches ? (
                <SingleProduct product={product} matches={matches} />
            ) : (
                <SingleProductDesktop product={product} matches={matches} />
            )}
        </Grid>
    ));

    

    // EDITAR esto define el tamaño de las imagenes

    return (
        <Container>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                justifyContent="center"
                sx={{ margin: `20px 4px 10px 4px` }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
                {renderProducts}
            </Grid>
        </Container>
    );
}
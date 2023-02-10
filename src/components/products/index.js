import { useTheme } from "@mui/material/styles";
import { Grid, TextField, Toolbar, useMediaQuery } from "@mui/material";
import { Container } from "@mui/system";
import SingleProduct from "./SingleProduct";
import SingleProductDesktop from "./SingleProductDesktop";
import { useEffect, useState } from "react";

export default function Products() {

    const [filter, setFilter] = useState('');
    const handleSearchChange = (e) => {
        setFilter(e.target.value);
    };


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
            id="productos"
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
        <Container sx={{marginBottom: '30px'}}>
            <Toolbar >
                <div>
                    <TextField
                        onChange={handleSearchChange}
                        label="Busqueda..."
                        variant="standard"
                    />
                </div>
            </Toolbar >
            <Grid container spacing={2} >
                {
                    Object.keys(productos).map(key =>
                        productos[key].nombre.toLowerCase().includes(filter.toLowerCase()) &&
                        renderProducts[key]
                    )
                }
            </Grid>
            {/* <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                justifyContent="center"
                sx={{ margin: `20px 4px 10px 4px` }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
                {renderProducts}
            </Grid> */}
        </Container>
    );
}
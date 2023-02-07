import { Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../style/products";
import { useEffect, useState } from "react";


export default function ProductMeta({ product, matches }) {

    // const [precios, setPrecios] = useState([]);
    // useEffect(() => {
    //     fetch("http://localhost:8080/precio/mostrar/"+product.id)
    //         .then(res => res.json())
    //         .then(
    //             (data) => {
    //                 setPrecios(data)
    //                 console.log(data.message)
    //             },
    //             (error) => {
    //                 console.log(error)
    //             }
    //         )
    // }, [])

    return (
        <ProductMetaWrapper>
            <Typography textAlign={"center"} variant={matches ? "h6" : "h5"} lineHeight={2}>
                {product.nombre}
            </Typography>
            <Typography variant={matches ? "caption" : "body1"}>
                40000
                {/* Arreglar el precio */}
            </Typography>
        </ProductMetaWrapper>
    );
}
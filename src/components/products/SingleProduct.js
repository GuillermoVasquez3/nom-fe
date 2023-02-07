import { Stack, Tooltip } from "@mui/material";
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToList, ProductFavButton, ProductImage } from "../../style/products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import ProductDetail from "../details";
import useDialogModal from "../../hooks/useDialogModal";
import { useState } from "react";
import { Box } from "@mui/system";


//component
export default function SingleProduct({ product, matches }) {

    const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] =
        useDialogModal(ProductDetail);

    const [showOptions, setShowOptions] = useState(false);

    const handleMouseEnter = () => {
        setShowOptions(true);
    };
    const handleMouseLeave = () => {
        setShowOptions(false);
    };

    return (
        <>
            <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ProductImage onClick={() => showProductDetailDialog()}  src={"http://localhost:8080/images/"+product.image} />
                <ProductMeta product={product} matches={matches} />
                <ProductActionsWrapper>
                    <Stack direction={matches ? "row" : "column"}>
                        <ProductFavButton isfav={0}>
                            <FavoriteIcon />
                        </ProductFavButton>
                    </Stack>
                </ProductActionsWrapper>
            </Product>
            <ProductAddToList variant="contained">Agregar a la lista</ProductAddToList>
            <ProductDetailDialog product={product}/>
        </>
    )
}
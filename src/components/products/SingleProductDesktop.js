import { Alert, Stack, Tooltip } from "@mui/material";
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToList, ProductFavButton, ProductImage } from "../../style/products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import { useEffect, useState } from "react";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../details";
import Swal from 'sweetalert2'


export default function SingleProductDesktop({ product, matches }) {

    const [showAlert, setShowAlert] = useState(false);

    const [showOptions, setShowOptions] = useState(false);

    const [showAddToList, setShowAddToList] = useState(true);

    useEffect(() => {
        if (showAlert) {
            setShowAddToList(false);
            setTimeout(() => {
                setShowAlert(false);
                setShowAddToList(true);
            }, 1500);
        }
    }, [showAlert]);

    const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] =
        useDialogModal(ProductDetail);


    const handleMouseEnter = () => {
        setShowOptions(true);
    };
    const handleMouseLeave = () => {
        setShowOptions(false);
    };

    return (
        <>
            <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ProductImage onClick={() => showProductDetailDialog()} src={"http://localhost:8080/images/" + product.image} />
                <ProductFavButton isfav={0}>
                    <Tooltip placement="left" title="Favorito">
                        <FavoriteIcon />
                    </Tooltip>
                </ProductFavButton>

                {showOptions && showAddToList && (
                    <ProductAddToList
                        onClick={() => {
                            setShowOptions(false);
                            setShowAlert(true);
                        }}
                        show={showOptions}
                        variant="contained"
                    >
                        Agregar a la lista
                    </ProductAddToList>
                )}
                {showAlert && (
                    <Alert sx={{position:"absolute"}} variant="filled" severity="success">
                        Agregado a la lista
                    </Alert>
                )}
                <ProductActionsWrapper show={showOptions}>
                </ProductActionsWrapper>
            </Product>
            <ProductMeta product={product} matches={matches} />
            <ProductDetailDialog product={product} />
        </>
    );
}
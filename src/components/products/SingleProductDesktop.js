import { Alert } from "@mui/material";
import { Product, ProductActionsWrapper, ProductAddToList, ProductImage } from "../../style/products";
import ProductMeta from "./ProductMeta";
import { useEffect, useState, useContext } from "react";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../details";
import { ProductListContext } from './ProductList';


// export default function SingleProductDesktop({ product, matches }) {

//     const [showAlert, setShowAlert] = useState(false);

//     const [showOptions, setShowOptions] = useState(false);

//     const [showAddToList, setShowAddToList] = useState(true);

//     useEffect(() => {
//         if (showAlert) {
//             setShowAddToList(false);
//             setTimeout(() => {
//                 setShowAlert(false);
//                 setShowAddToList(true);
//             }, 1500);
//         }
//     }, [showAlert]);

//     const [ProductDetailDialog, showProductDetailDialog, closeProductDialog] =
//         useDialogModal(ProductDetail);


//     const handleMouseEnter = () => {
//         setShowOptions(true);
//     };
//     const handleMouseLeave = () => {
//         setShowOptions(false);
//     };

//     return (
//         <>
//             <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//                 <ProductImage onClick={() => showProductDetailDialog()} src={"http://localhost:8080/images/" + product.image} />
//                 <ProductFavButton isfav={0}>
//                     <Tooltip placement="left" title="Favorito">
//                         <FavoriteIcon />
//                     </Tooltip>
//                 </ProductFavButton>

//                 {showOptions && showAddToList && (
//                     <ProductAddToList
//                         onClick={() => {
//                             setShowOptions(false);
//                             setShowAlert(true);
//                         }}
//                         show={showOptions}
//                         variant="contained"
//                     >
//                         Agregar a la lista
//                     </ProductAddToList>
//                 )}
//                 {showAlert && (
//                     <Alert sx={{position:"absolute"}} variant="filled" severity="success">
//                         Agregado a la lista
//                     </Alert>
//                 )}
//                 <ProductActionsWrapper show={showOptions}>
//                 </ProductActionsWrapper>
//             </Product>
//             <ProductMeta product={product} matches={matches} />
//             <ProductDetailDialog product={product} />
//         </>
//     );
// }





export default function SingleProductDesktop({ product, matches }) {
    const [showAlert, setShowAlert] = useState(false);

    const [showOptions, setShowOptions] = useState(false);

    const [showAddToList, setShowAddToList] = useState(true);

    const { productList, setProductList } = useContext(ProductListContext);

    useEffect(() => {
        if (showAlert) {
            setShowAddToList(false);
            setTimeout(() => {
                setShowAlert(false);
                setShowAddToList(true);
            }, 1500);
        }
    }, [showAlert]);

    const handleMouseEnter = () => {
        setShowOptions(true);
    };
    const handleMouseLeave = () => {
        setShowOptions(false);
    };

    const handleAddToList = () => {
        setProductList([...productList, product]);
        setShowOptions(false);
        setShowAlert(true);
        localStorage.setItem('listaProductos', JSON.stringify([]));
        localStorage.setItem('listaProductos', JSON.stringify(productList));
    };

    const [ProductDetailDialog, showProductDetailDialog] =
        useDialogModal(ProductDetail);


    return (
        <>
            <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ProductImage onClick={() => showProductDetailDialog()} src={"http://localhost:8080/images/" + product.image} />
                {/* <ProductFavButton isfav={0}>
                    <Tooltip placement="left" title="Favorito">
                        <FavoriteIcon />
                    </Tooltip>
                </ProductFavButton> */}

                {showOptions && showAddToList && (
                    <ProductAddToList
                        onClick={handleAddToList}
                        show={showOptions}
                        variant="contained"
                    >
                        Agregar a la lista
                    </ProductAddToList>
                )}
                {showAlert && (
                    <Alert sx={{ position: "absolute" }} variant="filled" severity="success">
                        Agregado a la lista
                    </Alert>
                )}
                <ProductActionsWrapper show={showOptions} />
            </Product>
            <ProductMeta product={product} matches={matches} />
            <ProductDetailDialog product={product} />
        </>
    );
    
}



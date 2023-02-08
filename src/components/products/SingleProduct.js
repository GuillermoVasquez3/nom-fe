import { Product, ProductAddToList, ProductImage } from "../../style/products";
import ProductMeta from "./ProductMeta";
import ProductDetail from "../details";
import useDialogModal from "../../hooks/useDialogModal";


//component
export default function SingleProduct({ product, matches }) {

    const [ProductDetailDialog, showProductDetailDialog] =
        useDialogModal(ProductDetail);


    return (
        <>
            <Product>
                <ProductImage onClick={() => showProductDetailDialog()}  src={"http://localhost:8080/images/"+product.image} />
                <ProductMeta product={product} matches={matches} />
                {/* <ProductActionsWrapper>
                    <Stack direction={matches ? "row" : "column"}>
                        <ProductFavButton isfav={0}>
                            <FavoriteIcon />
                        </ProductFavButton>
                    </Stack>
                </ProductActionsWrapper> */}
            </Product>
            <ProductAddToList variant="contained">Agregar a la lista</ProductAddToList>
            <ProductDetailDialog product={product}/>
        </>
    )
}
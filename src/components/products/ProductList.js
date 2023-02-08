import React, { useState } from 'react';

const ProductListContext = React.createContext([]);

const ProductListProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);

    return (
        <ProductListContext.Provider value={{ productList, setProductList }}>
            {children}
        </ProductListContext.Provider>
    );
};

export { ProductListContext, ProductListProvider };
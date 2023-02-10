import { Routes, Route } from "react-router-dom";
import { Box, Container, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { useEffect } from 'react';
import Appbar from './components/appbar';
import Banner from './components/banner';
import AppDrawer from './components/drawer';
import Footer from './components/footer';
import News from './components/news';
import Products from './components/products';
import { UIProvider } from './context/ui';
import theme from './style/theme';
import SignUp from "./components/signup";
import SignIn from "./components/login";
import List from "./components/list";
import { ProductListProvider } from "./components/products/ProductList";

//arreglar orden de imagenes
//pagina lista
//pagina de integrantes "Sobre Nosotros"

//

function Home() {
  return (
    <ProductListProvider>
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: '#fff' }}>
        <UIProvider>
          <Appbar />
          <Banner />
          <News />
          <Box display="flex" justifyContent={"center"} sx={{ p: 4 }}>
            <Typography variant="h4">Productos</Typography>
          </Box>
          <Products/>
          <Footer />
          <AppDrawer />
        </UIProvider>
      </Container>
    </ThemeProvider>
    </ProductListProvider>
  );
}

function App() {
  useEffect(() => {
    document.title = "Ñom";
  }, []);

  return (
<div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="login" element={ <SignIn/> } />
        <Route path="signup" element={ <SignUp/> } />
        <Route path="list" element={ <List/> } />
        <Route path="products" element={ <Products/> } />
        {/* 
        template de router
        <Route path="aboutus" element={ <SignIn/> } /> */}
      </Routes>
    </div>
  );
}

export default App;

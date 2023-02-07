import { Routes, Route } from "react-router-dom";
import { Box, Button, Container, Typography } from '@mui/material';
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
import SearchBox from "./components/search";
import List from "./components/list";

//arreglar orden de imagenes
//pagina lista
//pagina de integrantes "Sobre Nosotros"

//

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: '#fff' }}>
        <UIProvider>
          <Appbar />
          <SearchBox/>
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
        {/* 
        template de router
        <Route path="aboutus" element={ <SignIn/> } /> */}
      </Routes>
    </div>
  );
}

export default App;

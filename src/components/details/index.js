import { Button, Dialog, DialogContent, DialogTitle, IconButton, Slide, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../../style/theme";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { Product, ProductImage } from "../../style/products";
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Logo } from "../../style/banner";

function SlideTransition(props) {
    return <Slide direction="down" {...props} />;
}


const ProductDetailWrapper = styled(Box)(({ theme }) => ({
    display: 'felx',
    padding: theme.spacing(4),
    minHeight: '800px'
}));

const ProductDetailInfoWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 500,
    lineHeight: 1.5,
}));

// inicio

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
//final

export default function ProductDetail({ open, onClose, product }) {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    

    return (
        <Dialog
            TransitionComponent={SlideTransition}
            variant="permanant"
            open={open}
            fullScreen
        >
            <DialogTitle
            >
                <Box
                    display="flex"
                    alignItems="center"
                >
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <ProductDetailWrapper
                    display={"flex"}
                    alignItems={'center'}
                    justifyContent={'space-around'}
                    flexDirection={matches ? "column" : "row"}>
                    <Product sx={{ mr: 4 }}>
                        <Box sx={{ width: '100%', }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    aria-label="basic tabs example"
                                >
                                    <Tab label="Producto" {...a11yProps(0)} />
                                    <Tab label="Etiqueta" {...a11yProps(1)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <ProductImage sx={{ maxWidth: 600 }} src={"http://localhost:8080/images/" + product.image} />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <ProductImage sx={{ maxWidth: 600 }} src={"http://localhost:8080/images/" + product.infonutri} />
                            </TabPanel>
                        </Box>
                    </Product>
                    <ProductDetailInfoWrapper>
                        <Typography sx={{ lineHeight: 2 }} variant="h5">
                            {product.nombre}
                        </Typography>
                        <Typography variant="body">
                            {product.ingredientes}
                        </Typography>
                        <Box
                            sx={{ mt: 4 }}
                            display='flex'
                            alignItems='center'
                            flexDirection='space-between'
                        >
                            <Button variant='contained'>
                                Agregar a la lista
                            </Button>
                        </Box>
                    </ProductDetailInfoWrapper>
                </ProductDetailWrapper>
            </DialogContent>
        </Dialog>
    )
}
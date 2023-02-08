import { Grid, List, ListItemText, Typography } from "@mui/material";
import { FooterTitle } from "../../style/footer";
import { Colors } from "../../style/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box } from "@mui/system";


export default function Footer() {
    return (
        <Box
            sx={{
                
                background: Colors.shaft,
                color: Colors.white,
                p: { xs: 4, md: 10 },
                pt: 12,
                pb: 12,
                fontSize: { xs: '12px', md: '14px' },
            }}
        >
            <Grid container spacing={2} justifyContent="center">
                <Grid item md={6} lg={4}>
                    <FooterTitle variant="body1">Sobre Nosotros</FooterTitle>
                    <Typography variant="caption2">
                        Ñom es una herramienta esencial para cualquiera que esté buscando alimentos de calidad. Con su base de datos exhaustiva y opciones de filtrado, encontrarás rápidamente los alimentos que estás buscando y te sentirás seguro de que estás haciendo una elección informada con cada compra. ¡Comienza a buscar alimentos con Ñom hoy mismo!
                    </Typography>
                    <Box
                        sx={{
                            mt: 4,
                            color: Colors.dove_gray,
                        }}
                    >
                        <FacebookIcon sx={{ mr: 1 }} />
                        <TwitterIcon sx={{ mr: 1 }} />
                        <InstagramIcon />
                    </Box>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">Informacion</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Sobre Nosotros
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Politica &amp; Privacida
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Terminos &amp; Condiciones
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">Mi Cuenta</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Login
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Mi Lista
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Mi Cuenta
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
            </Grid>
        </Box>
    );
}
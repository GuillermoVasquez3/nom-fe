import { Link } from "react-router-dom";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';
import { HttpClient } from "../axio";
import qs from 'querystring';
import { useNavigate } from "react-router-dom";




const theme = createTheme();

export default function SignIn() {

    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });

        const datos = {
            email: data.get('email'),
            password: data.get('password'),
        }

        const headers =
            { 'Content-Type': 'application/x-www-form-urlencoded' }


        const response = await HttpClient.post('/usuarios/login-user', qs.stringify(datos), headers)
            .then(async response => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                const idusuario = (response.data).message.split('-')[1].trim()
                window.localStorage.setItem('idusuario', idusuario)
                navigate("/");
                return response
            }).catch(error => {
                
            })
        }

        // const handleSubmit = (event) => {
        //     event.preventDefault();
        //     const data = new FormData(event.currentTarget);
        //     console.log({
        //         email: data.get('email'),
        //         password: data.get('password'),
        //     });

        //     const formdata= new FormData();
        //     formdata.append("email", data.get('email'));
        //     formdata.append("password", data.get('password'))
        //     fetch("http://localhost:8080/usuarios/login-user", {
        //         method: 'POST',
        //         body: JSON.stringify({
        //             email: data.get('email'),
        //             password: data.get('password'),
        //         }),
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //     })
        //         .then(res => res.json())
        //         .then(
        //             (data) => {
        //                 console.log(data)
        //             },
        //             (error) => {
        //                 console.log(error)
        //             }
        //         )
        // };

        return (
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Ingresar
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Dirección De Correo"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Contraseña"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Ingresar
                            </Button>
                            <Link to="../signup">
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <a variant="body2">
                                            {"¿No tienes una cuenta? Regístrate"}
                                        </a>
                                    </Grid>
                                </Grid>
                            </Link>
                        </Box>
                        <Grid container justifyContent="flex-end">
                        </Grid>
                    </Box>
                </Container>
            </ThemeProvider>
        );
    }


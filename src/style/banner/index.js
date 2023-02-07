import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import { Colors } from "../theme";


export const BannerContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '100%',
    backgroundColor:'rgba(242, 119, 119, 0.3)',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center'
    }
}));

export const Logo = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "40px",
    [theme.breakpoints.down("md")]: {
        width: "40px",
    },
    [theme.breakpoints.down("sm")]: {
        width: "40px",
    },
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "200px",
    padding: "15px 5px",
    [theme.breakpoints.down("md")]: {
        width: "210px",
    },
    [theme.breakpoints.down("sm")]: {
        width: "200px",
    },
}));

export const BannerContent = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: 420,
    padding: "30px",
}));

export const BannerTitle = styled(Typography)(({ matches, theme }) => ({
    lineHeight: 1.5,
    fontSize: "72px",
    marginBottom: "20px",
    [theme.breakpoints.down('sm')]: {
        fontSize: '42px',
    }
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
        lineHeight: 1.15,
        letterSpacing: 1.15,
        marginBottom: "1.5em",
    },
}));

export const BannerProductButton = styled(Button, {
    // Configure which props should be forwarded on DOM
    shouldForwardProp: (prop) => prop !== "color",
    name: "MyProductButton",
    slot: "Root",
    // We are specifying here how the styleOverrides are being applied based on props
    overridesResolver: (props, styles) => [
        styles.root,
        props.color === "primary" && styles.primary,
        props.color === "secondary" && styles.secondary,
    ],
})(({ theme }) => ({
    padding: "20px 0px",
    fontWeight: "bold",
    fontSize: "16px",
    [theme.breakpoints.down("sm")]: {
        padding: "10px 0px",
        fontSize: "14px",
    },
}));
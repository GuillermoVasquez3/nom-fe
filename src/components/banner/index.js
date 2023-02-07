import { useTheme } from "@mui/material/styles";
import { Typography, useMediaQuery } from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerProductButton, BannerTitle } from "../../style/banner";

export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <BannerContainer>
            <BannerImage src="/images/banner/banner.png"/>
            <BannerContent>
                <BannerTitle vatiant = "h2">
                    ¿Quienes somos?
                </BannerTitle>

                <BannerDescription variant = 'subtitle'>
                    Somos Ñom una web que facilita la busqueda de alimentos ...
                </BannerDescription>
                <BannerProductButton color="primary">
                    Mas Detalles
                </BannerProductButton>
            </BannerContent>
        </BannerContainer>
    );
}
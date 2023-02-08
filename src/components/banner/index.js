import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerProductButton, BannerTitle } from "../../style/banner";
import { useNavigate } from "react-router-dom";

export default function Banner() {
    const navigate = useNavigate();
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
                <BannerProductButton onClick={() => navigate('/signup')} color="primary">
                    Únete aquí
                </BannerProductButton>
            </BannerContent>
        </BannerContainer>
    );
}
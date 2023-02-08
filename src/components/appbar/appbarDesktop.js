import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList, ActionIconsContainerDesktop, ActionIconsContainerMobile } from "../../style/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";
import { Logo } from "../../style/banner";
import { useNavigate } from "react-router-dom";

export default function AppbarDesktop({ matches }) {

    const navigate = useNavigate();

    const { setShowSearchBox } = useUIContext();

    return (
        <AppbarContainer>
            <AppbarHeader>
                <Logo src="/images/banner/banner.png" />
            </AppbarHeader>
            <MyList type="row">
                <ListItemButton onClick={() => navigate('/')}>
                    <ListItemText primary="Inicio" />
                </ListItemButton>
                <ListItemButton>
                <ListItemText onClick={() => navigate('/categorias')} primary="Categorias" />
                </ListItemButton>
                <ListItemButton>
                <ListItemText primary="Productos" />
                </ListItemButton>
                <ListItemButton onClick={() => setShowSearchBox(true)}  >
                    <ListItemIcon>
                        <SearchIcon />
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
            <Actions matches={matches} />
        </AppbarContainer>
    );
}
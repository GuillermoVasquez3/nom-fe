import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {AppbarContainer, AppbarHeader, MyList, ActionIconsContainerDesktop, ActionIconsContainerMobile} from "../../style/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";
import { Logo } from "../../style/banner";

export default function AppbarDesktop({ matches }) {

    const { setShowSearchBox } = useUIContext();

    return (
        <AppbarContainer>
            <AppbarHeader>
                <Logo src="/images/banner/banner.png" />
            </AppbarHeader>
            <MyList type="row">
                <ListItemText primary="Inicio" />
                <ListItemText primary="Categorias" />
                <ListItemText primary="Productos" />
                <ListItemButton  onClick={() => setShowSearchBox(true)}  >
                    <ListItemIcon>
                        <SearchIcon/>
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
            <Actions matches = {matches}/>
        </AppbarContainer>
    );
}
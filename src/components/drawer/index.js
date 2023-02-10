import {
    Divider,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    styled,
} from "@mui/material";
import { useUIContext } from "../../context/ui";
import CloseIcon from "@mui/icons-material/Close";
import { lighten } from "polished";
import { DrawerCloseButton } from "../../style/appbar";
import { Colors } from "../../style/theme";

const MiddleDivider = styled((props) => (
    <Divider variant="middle" {...props} />
))``;

export default function AppDrawer() {

    const { drawerOpen, setDrawerOpen } = useUIContext();

    return (
        <>
            {drawerOpen && (
                <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
                    <CloseIcon
                        sx={{
                            fontSize: "2.5rem",
                            color: lighten(0.09, Colors.secondary),
                        }}
                    />
                </DrawerCloseButton>
            )}
            <Drawer open={drawerOpen}>
                <List>
                    <ListItemButton>
                        <ListItemText>Inicio</ListItemText>
                    </ListItemButton>
                    <MiddleDivider />
                    <ListItemButton>
                        <ListItemText>Productos</ListItemText>
                    </ListItemButton>
                    <MiddleDivider />
                </List>
            </Drawer>
        </>
    );
}
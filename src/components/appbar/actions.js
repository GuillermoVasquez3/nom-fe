import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LoginIcon from '@mui/icons-material/Login';
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, MyList } from "../../style/appbar";
import { Colors } from "../../style/theme";
import { useNavigate } from "react-router-dom";



export default function Actions({ matches }) {

    const Component = matches
        ? ActionIconsContainerMobile
        : ActionIconsContainerDesktop;

    const navigate = useNavigate();

    return (
        <Component>
            <MyList type="row">
                <ListItemButton to="list"
                    sx={{
                        justifyContent: "center",
                    }}>
                    <ListItemIcon
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            color: matches && Colors.secondary,
                        }}>
                        <FormatListBulletedIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
                {/* <ListItemButton
                    sx={{
                        justifyContent: "center",
                    }}>
                    <ListItemIcon
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            color: matches && Colors.secondary,
                        }}>
                        <FavoriteIcon />
                    </ListItemIcon>
                </ListItemButton> */}
                <Divider orientation="vertical" flexItem />
                <ListItemButton onClick={() => navigate('/login')}
                    sx={{
                        justifyContent: "center",
                    }}>
                    <ListItemIcon
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            color: matches && Colors.secondary,
                        }}>
                        <LoginIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
            </MyList>
        </Component>
    )
}
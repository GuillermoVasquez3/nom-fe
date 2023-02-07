import { Box, styled } from "@mui/system";
import { Colors } from "../../style/theme";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useUIContext } from "../../context/ui";
import { IconButton, Slide, TextField } from "@mui/material";


const SearchBoxContainer = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: Colors.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99999,
    opacity: 0.9,
}));

const SearchField = styled(TextField)(({ theme }) => ({
    ".MuiInputLabel-root": {
        color: "white",
    },
    ".MuiInput-root": {
        fontSize: '1rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem',
        },
        color: "white",
    },
    ".MuiInput-root::before": {
        borderBottom: `1px solid ${"white"}`,
    },
    padding: "0 0 0 40px",
}));

export default function SearchBox() {
    const { showSearchBox, setShowSearchBox } = useUIContext();

    return (
        <Slide direction="down" in={showSearchBox} timeout={500}>
            <SearchBoxContainer>
                <SearchField
                    color="secondary"
                    variant="standard"
                    fullWidth
                    placeholder="Buscar..."
                />
                <IconButton>
                    <SearchIcon sx={{ fontSize: { xs: '2rem', md: "3rem" } }}  />
                </IconButton>
                <IconButton
                    onClick={() => setShowSearchBox(false)}
                    sx={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                    }}
                >
                    <CloseIcon sx={{ fontSize: "4rem" }}  />
                </IconButton>
            </SearchBoxContainer>
        </Slide>
    );
}
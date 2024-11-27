import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
    return (
        <TextField
            variant="outlined"
            placeholder="Search for products..."
            size="small"
            fullWidth
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                },
            }}
            sx={{
                backgroundColor: "#FFFFFF",
                borderRadius: "4px",
                "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: "#CCCCCC",
                    },
                    "&:hover fieldset": {
                        borderColor: "#999999",
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "#74B83E",
                    },
                },
            }}
        />
    );
};

export default SearchBar;

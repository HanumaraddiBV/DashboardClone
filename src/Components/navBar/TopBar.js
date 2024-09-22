import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useContext } from "react";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import ViewSidebarTwoToneIcon from "@mui/icons-material/ViewSidebarTwoTone";
import KeyboardCommandKeyTwoToneIcon from "@mui/icons-material/KeyboardCommandKeyTwoTone";
import SearchIcon from "@mui/icons-material/Search";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import { useTheme } from "@emotion/react";
import { ColorModeContext, tokens } from "../../theme";

const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme?.palette?.mode);
  console.log("colors", colors);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box
      sx={{
        width: "948px",
        height: "68px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #ddd", // Proper borderBottom
        px: 20,

      }}
      backgroundColor={colors.primary[100]}
    >
      {/* Left Side (Icons and Dashboard Buttons) */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          width: "256px",
          height: "28px",
          justifyContent: "space-around",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "64px",
            textAlign: "center",
          }}
        >
          <IconButton>
            <ViewSidebarTwoToneIcon />
          </IconButton>
          <IconButton>
            <StarOutlineRoundedIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "184px",
            textAlign: "center",
          }}
        >
          <Button variant="text" sx={{ color: "#1C1C1C66" }}>
            Dashboard <span> / </span>
          </Button>
          <Button variant="text" sx={{ color: "black" }}>
            Default
          </Button>
        </Box>
      </Box>

      {/* Right Side (Search and Other Icons) */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          width:"316px"
        }}
      >
        {/* Search Field */}
        <TextField
          variant="outlined"
          placeholder="Search..."
          sx={{
            width: "160px",
            "& .MuiOutlinedInput-root": {
              paddingRight: 0,
            },
            "& input": {
              padding: "4px, 8px, 4px, 8px",
            },
            gap:"8px"
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <KeyboardCommandKeyTwoToneIcon />
              </InputAdornment>
            ),
          }}
        />
        {/* Icons */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            width:"136px"
          }}
        >
          <IconButton>
            <WbSunnyRoundedIcon />
          </IconButton>
          <IconButton>
            <HistoryRoundedIcon />
          </IconButton>
          <IconButton>
            <NotificationsNoneRoundedIcon />
          </IconButton>
          <IconButton>
            <ViewSidebarTwoToneIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
export default TopBar;

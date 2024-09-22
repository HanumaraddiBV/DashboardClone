import { Avatar, Box } from "@mui/material";
import React from "react";
import "./style.css";
const LeftSideNavBar = () => {
  return (
    <Box>
      <Box>
        <Avatar
          alt="ByeWind"
          src={`${process.env.PUBLIC_URL}/images/user.svg`}
        />
        <p>ByeWind</p>
      </Box>
    </Box>
  );
};

export default LeftSideNavBar;

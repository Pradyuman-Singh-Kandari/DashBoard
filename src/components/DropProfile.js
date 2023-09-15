/* eslint-disable no-unused-vars */
import React from "react";
import dropProfile from "../components/dropProfile.css"
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const DropProfile = () => {
    const theme = useTheme();
   const colors = tokens(theme.palette.mode); 
  return (
    <Box className="drop" backgroundColor={colors.primary[400]} >
        <img src='/' alt="no img" />
      <div className="items">
        <ul>
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </div>
    </Box>
  );
};

export default DropProfile;

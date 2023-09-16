/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  useTheme,
} from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { ColorModeContext, tokens } from "../../theme";
import DropProfile from "../../components/DropProfile";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [openProfile, setOpenProfile] = useState(false);
  const [notifications, setNotifications] = useState(false);

  const toggleColorMode = () => {
    colorMode.toggleColorMode();
  };

  const openProfileMenu = () => {
    setOpenProfile(true);
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* Search Bar */}
      <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* Icons */}
      <Box>
        <IconButton onClick={toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton onClick={openProfileMenu}>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
      {notifications && "/* Display notifications here */"}
      {openProfile && <DropProfile />}
    </Box>
  );
};

export default Topbar;

/* eslint-disable no-unused-vars */
import { Box, IconButton, useTheme } from "@mui/material";
import { useColorScheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon  from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon  from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon  from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon  from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon  from "@mui/icons-material/PersonOutlined";
import SearchIcon  from "@mui/icons-material/Search";
import DropProfile from "../../components/DropProfile";
import { useContext } from "react";
import { useState } from "react";

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const [openProfile, setOpenProfile] = useState(false);
    const [notifications, setNotifications] = useState(false);

    return (
      <Box display="flex" justifyContent="space-between" p={2}>
          {/*Search Bar*/}
          <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
              <InputBase sx={{ ml: 2, flex: 1}} placeholder="Search"></InputBase>
              <IconButton type="button" sx= {{p: 1}}>
                  <SearchIcon />
              </IconButton>
          </Box>

          {/* Icons */}
          <Box>
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === 'dark'? (
                    <DarkModeOutlinedIcon />
                ) : (
                    <LightModeOutlinedIcon />
                )
                }
            </IconButton>
            <IconButton>
                <NotificationsOutlinedIcon />
            </IconButton>
            <IconButton onClick={() => setOpenProfile((prev) => (!prev))}>
                <PersonOutlinedIcon />
            </IconButton>
          </Box>
          {
            notifications 
          }
          {
            openProfile && <DropProfile />
          }
      </Box>
      
    );
}

export default Topbar;
import React, { useState } from 'react';
import { Button, Avatar, Menu, MenuItem } from '@mui/material';
import { Settings, ExitToApp } from '@mui/icons-material';
import { styled } from '@mui/system';

const ProfileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    // Simulate logout action (clear user session, etc.)
    // After logout, redirect to the login page
    window.location.href = '/login';
  };

  const ProfileAvatar = styled(Avatar)`
    background-color: #1976D2;
    color: white;
    width: 40px;
    height: 40px;
  `;

  return (
    <div>
      <Button onClick={handleMenuToggle} startIcon={<ProfileAvatar>U</ProfileAvatar>}>
        John Doe
      </Button>
      <Menu
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        anchorEl={null}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      >
        <MenuItem>
          <Avatar>JD</Avatar> John Doe
        </MenuItem>
        <MenuItem>
          <Settings /> Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ExitToApp /> Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileMenu;

import React, { useState } from 'react';
// material-ui
import { Badge, Box, IconButton } from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreVert';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';

import SearchIcon from '@mui/icons-material/Search';
// project import
import { Search, SearchIconWrapper, StyledInputBase } from 'app/shared/layout/header/HeaderContent/Search';
import Menu from 'app/shared/layout/header/HeaderContent/menu';
import MobileMenu from 'app/shared/layout/header/HeaderContent/MobileMenu';


// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-account-menu';

  const mobileMenuId = 'primary-account-menu-mobile';

  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder='Search…'
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
          <Badge badgeContent={4} color='error'>
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton
          size='large'
          aria-label='show 17 new notifications'
          color='inherit'
        >
          <Badge badgeContent={17} color='error'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          size='large'
          edge='end'
          aria-label='account of current user'
          aria-controls={menuId}
          aria-haspopup='true'
          onClick={handleProfileMenuOpen}
          color='inherit'
        >
          <AccountCircle />
        </IconButton>

      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size='large'
          aria-label='show more'
          aria-controls={mobileMenuId}
          aria-haspopup='true'
          onClick={handleMobileMenuOpen}
          color='inherit'
        >
          <MoreIcon />
        </IconButton>
      </Box>
      {isMobileMenuOpen && <MobileMenu mobileMenuId={mobileMenuId}
                                       isMobileMenuOpen={isMobileMenuOpen}
                                       handleMobileMenuClose={handleMobileMenuClose}
                                       handleProfileMenuOpen={handleProfileMenuOpen}
                                       mobileMoreAnchorEl={mobileMoreAnchorEl} />}
      {isMenuOpen && <Menu handleMenuClose={handleMenuClose}
                           isMenuOpen={isMenuOpen}
                           menuId={menuId}
                           anchorEl={anchorEl} />}
    </>
  );
};

export default HeaderContent;

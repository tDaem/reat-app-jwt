import React from 'react';
import {Menu as MuiMenu, MenuItem } from '@mui/material';

interface IMenuProps {
  anchorEl: null | HTMLElement,
  menuId: string,
  isMenuOpen: boolean,
  handleMenuClose: () => void
}

const Menu = (props: IMenuProps) => {

  const {anchorEl, menuId, isMenuOpen, handleMenuClose} = props
  return (
    <MuiMenu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </MuiMenu>
  )
}

export default Menu;

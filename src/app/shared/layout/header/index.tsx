import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { AppBar, AppBarProps, IconButton, Toolbar, useMediaQuery } from '@mui/material';

// project import
import AppBarStyled from './AppBarStyled';
import HeaderContent from './HeaderContent';

// assets
import MenuIcon from '@mui/icons-material/Menu';

// ==============================|| MAIN LAYOUT - HEADER ||============================== //
interface IHeaderProps {
  open: boolean,
  handleDrawerToggle?: () => void
}

const Header = (props: IHeaderProps) => {
  const { open, handleDrawerToggle } = props;
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'))

  // common header
  const mainHeader = (
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={handleDrawerToggle}
      >
        <MenuIcon />
      </IconButton>
      <HeaderContent />
    </Toolbar>
  );

  // app-bar params
  const appBar = {
    position: 'fixed',
    color: 'inherit',
    elevation: 0,
    sx: {
      borderBottom: `1px solid ${theme.palette.divider}`
      // boxShadow: theme.customShadows.z1
    }
  } as AppBarProps;

  return (
    <>
      {!matchDownMD ? (
        <AppBarStyled open={open} {...appBar}>
          {mainHeader}
        </AppBarStyled>
      ) : (
        <AppBar {...appBar}>{mainHeader}</AppBar>
      )}
    </>
  );
};

export default Header;

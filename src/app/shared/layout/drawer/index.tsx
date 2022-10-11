import { useMemo } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Drawer as MuiDrawer, useMediaQuery } from '@mui/material';

// project import
import DrawerHeader from './DrawerHeader';
import { DRAWER_WIDTH } from 'app/config/constants';
import React from 'react';
import MiniDrawerStyled from 'app/shared/layout/drawer/MiniDrawerStyled';

// ==============================|| MAIN LAYOUT - DRAWER ||============================== //

const Drawer = (props: IDrawerProps) => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

  const { open, handleDrawerToggle, window } = props;

  // responsive drawer container
  const container = window !== undefined ? () => window().document.body : undefined;

  // header content
  const drawerHeader = useMemo(() => <DrawerHeader open={open} />, [open]);

  return (
    <Box component='nav' sx={{ flexShrink: { md: 0 }, zIndex: 1300 }} aria-label='mailbox folders'>
      {!matchDownMD ? (
        <MiniDrawerStyled variant='permanent' open={open}>
          {drawerHeader}
          {/*{drawerContent}*/}
        </MiniDrawerStyled>
      ) : (
        <MuiDrawer
          container={container}
          variant='temporary'
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
              borderRight: `1px solid ${theme.palette.divider}`,
              backgroundImage: 'none',
              boxShadow: 'inherit'
            }
          }}
        >
          {open && drawerHeader}
          {/*{open && drawerContent}*/}
        </MuiDrawer>
      )}
    </Box>
  );
};

interface IDrawerProps {
  open: boolean,
  handleDrawerToggle: () => void,
  window?: () => Window
}

export default Drawer;

// material-ui
import { styled } from '@mui/material/styles';
import Drawer, { DrawerProps } from '@mui/material/Drawer';

// project import
import { DRAWER_WIDTH } from 'app/config/constants';

// ==============================|| DRAWER - MINI STYLED ||============================== //
const MiniDrawerStyled = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    width: DRAWER_WIDTH,
    borderRight: `1px solid ${theme.palette.divider}`,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: 'hidden',
    boxShadow: 'none',
    '& .MuiDrawer-paper': {
      width: DRAWER_WIDTH,
      borderRight: `1px solid ${theme.palette.divider}`,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      overflowX: 'hidden',
      boxShadow: 'none'
    }
  }),
  ...(!open && {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: 0,
    borderRight: 'none',
    // boxShadow: theme.customShadows.z1,
    '& .MuiDrawer-paper': {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: 'hidden',
      width: 0,
      borderRight: 'none'
      // boxShadow: theme.customShadows.z1
    }
  })
}));

export default MiniDrawerStyled;

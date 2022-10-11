import React from 'react'
// material-ui
import { useTheme } from '@mui/material/styles';
import { Stack, Chip } from '@mui/material';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';

// ==============================|| DRAWER HEADER ||============================== //
interface IDrawerHeaderProps {
  open?: boolean
}

const DrawerHeader = (props: IDrawerHeaderProps) => {
    const theme = useTheme();

    const {open} = props;

    return (
        // only available in paid version
        <DrawerHeaderStyled theme={theme} open={open}>
            <Stack direction="row" spacing={1} alignItems="center">

            </Stack>
        </DrawerHeaderStyled>
    );
};

export default DrawerHeader;

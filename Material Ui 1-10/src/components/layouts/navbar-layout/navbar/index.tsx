import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Breakpoint,
  Drawer,
  useMediaQuery,
  type Theme,
  MenuList,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import linksData from 'navigation/links-data';
import NavbarLink from './navbar-links';
import NavbarMobileLink from './navbar-mobile';

const expandBreakpoint: Breakpoint = 'md';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(true);
  const isExapanded = useMediaQuery((theme: Theme) => theme.breakpoints.up(expandBreakpoint));
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: { xs: 'flex-end', [expandBreakpoint]: 'flex-start' } }}>
        <Box sx={{
          display: { xs: 'none', [expandBreakpoint]: 'flex' },
          alignSelf: 'stretch',
        }}
        >
          {linksData.map(({ link, text }) => (
            <NavbarLink key={link} to={link}>{text}</NavbarLink>
          ))}
        </Box>
        <IconButton
          sx={{
            display: { xs: 'flex', [expandBreakpoint]: 'none' },
          }}
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          {drawerOpen
            ? <CloseIcon sx={{ color: 'common.white', fontSize: 25 }} />
            : <MenuIcon sx={{ color: 'common.white', fontSize: 25 }} />}

        </IconButton>
        <Drawer
          open={drawerOpen && !isExapanded}
          onClose={() => setDrawerOpen(false)}
        >
          <Box sx={{ width: '100vw ' }}>
            <Toolbar />
            <MenuList>
              {linksData.map(({ link, text }) => (
                <MenuItem
                  key={link}
                  sx={{
                    p: 0,
                    '&:nth-of-type(2n)': {
                      backgroundColor: 'action.hover',
                    },
                  }}
                  onClick={() => setDrawerOpen(false)}
                >
                  <NavbarMobileLink to={link}>{text}</NavbarMobileLink>
                </MenuItem>
              ))}
            </MenuList>
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;

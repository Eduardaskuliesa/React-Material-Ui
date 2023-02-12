import React from 'react';
import {
  AppBar,
  Toolbar,
} from '@mui/material';
import DekstopLinkData from 'navigation/links-data';
import NavbarMobileMenu from './mobile/navbar-mobile-menu';
import NavBarDekstopMenu from './dekstop/navbar-dekstop-menu';
import { expandBreakpoint } from './mobile/mobile-links-data';

const Navbar = () => (
  <AppBar position="sticky">
    <Toolbar
      sx={{
        justifyContent: { xs: 'flex-end', [expandBreakpoint]: 'flex-start' },
      }}
    >
      <NavBarDekstopMenu
        expandBreakpoint={expandBreakpoint}
        linksData={DekstopLinkData}
      />
      <NavbarMobileMenu />
    </Toolbar>
  </AppBar>
);

export default Navbar;

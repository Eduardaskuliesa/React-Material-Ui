import React from 'react';
import { Box, type Breakpoint } from '@mui/material';
import LinkData from '../links.data.d';
import NavbarDekstopLink from './navbar-links';

type NavbarDekstopMenuProps = {
  expandBreakpoint: Breakpoint,
  linksData: LinkData[]
};

const NavBarDekstopMenu: React.FC<NavbarDekstopMenuProps> = ({
  expandBreakpoint,
  linksData,
}) => (
  <Box sx={{
    display: { xs: 'none', [expandBreakpoint]: 'flex' },
    alignSelf: 'stretch',
  }}
  >
    {
          linksData.map(({ link, content }) => (
            <NavbarDekstopLink key={link} to={link}>{content}</NavbarDekstopLink>
          ))
        }
  </Box>
);

export default NavBarDekstopMenu;

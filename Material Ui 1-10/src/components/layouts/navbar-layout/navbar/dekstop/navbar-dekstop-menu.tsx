import React from 'react';
import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import NavbarDekstopLink from './navbar-dekstop-link';
import { expandBreakpoint, linksData, linksGroups } from '../links-data';
import getActiveLinkGroupTitle from '../helpers';
import NavbarDekstopItem from './navbar-dekstop-item';
import NavbarDesktopDropdown from './navbar-dekstop-dropdown';

const NavBarDekstopMenu: React.FC = () => {
  const { pathname } = useLocation();
  const activeLinkGroupTitle = getActiveLinkGroupTitle(pathname);

  return (
    <Box sx={{
      display: { xs: 'none', [expandBreakpoint]: 'flex' },
      alignSelf: 'stretch',
    }}
    >
      {linksData.map(({ link, content }) => (
        <NavbarDekstopItem key={link} className={pathname === link ? 'active' : undefined}>
          <NavbarDekstopLink to={link}>{content}</NavbarDekstopLink>
        </NavbarDekstopItem>
      ))}
      {
      linksGroups.map(({ title, linksData: links }) => (
        <NavbarDekstopItem key={title} className={title === activeLinkGroupTitle ? 'active' : undefined}>
          <NavbarDesktopDropdown linksData={links} title={title} />
        </NavbarDekstopItem>
      ))
    }

    </Box>
  );
};

export default NavBarDekstopMenu;

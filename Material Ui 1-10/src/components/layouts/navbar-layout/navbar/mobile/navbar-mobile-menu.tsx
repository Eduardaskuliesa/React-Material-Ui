import React from 'react';
import {
  Toolbar,
  IconButton,
  Drawer,
  MenuList,
  MenuItem,
  useMediaQuery,
  type Theme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useLocation } from 'react-router-dom';
import NavbarMobileLink from './navbar-mobile';
import NavbarMobileLinkAccordion from './navbar-mobile-links-accordiont';
import { expandBreakpoint, MobilelinksGroups, linksData} from './mobile-links-data';
import getActiveLinkGroupTitle from '../helpers';

const NavbarMobileMenu: React.FC = () => {
  const { pathname } = useLocation();
  const activeLinkGroupTitle = getActiveLinkGroupTitle(pathname);
  const [menuOpen, setMenuOpen] = React.useState<boolean>(true);
  const isExpanded = useMediaQuery((theme: Theme) => theme.breakpoints.up(expandBreakpoint));

  const [
    openAccordionTitle,
    setOpenedAccordionTitle,
  ] = React.useState(activeLinkGroupTitle);

  const closeMenu = () => setMenuOpen(false);
  const handleAccordionAction = (groupTitle: string) => (
    event: React.SyntheticEvent,
    accordionOpen: boolean,
  ) => {
    setOpenedAccordionTitle(accordionOpen ? groupTitle : null);
  };

  return (
    <>
      <IconButton
        sx={{ display: { xs: 'flex', [expandBreakpoint]: 'none' } }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen
          ? <CloseIcon sx={{ color: 'common.white', fontSize: 25 }} />
          : <MenuIcon sx={{ color: 'common.white', fontSize: 25 }} />}
      </IconButton>
      <Drawer
        anchor="top"
        open={menuOpen && !isExpanded}
        onClose={() => setMenuOpen(false)}
      >
         <Toolbar />
          <MenuList sx={{ p: 0 }}>
            {linksData.map(({ link, content }) => (
              <MenuItem key={link} onClick={closeMenu} sx={{ p: 0 }}>
                <NavbarMobileLink to={link}>{content}</NavbarMobileLink>
              </MenuItem>
            ))}
            {MobilelinksGroups.map((linksGroup) => (
              <NavbarMobileLinkAccordion
                key={linksGroup.title}
                title={linksGroup.title}
                linksData={linksGroup.linksData}
                closeMenu={closeMenu}
                expanded={openAccordionTitle === linksGroup.title}
                onChange={handleAccordionAction(linksGroup.title)}
                hasActiveLink={activeLinkGroupTitle === linksGroup.title}
              />
            ))}
          </MenuList>
      </Drawer>
    </>
  );
};

export default NavbarMobileMenu;

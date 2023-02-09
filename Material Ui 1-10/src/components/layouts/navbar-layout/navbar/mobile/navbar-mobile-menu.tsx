import React from 'react';
import {
  Toolbar,
  IconButton,
  Box,
  Drawer,
  MenuList,
  MenuItem,
  useMediaQuery,
  type Theme,
  type Breakpoint,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NavbarMobileLink from './navbar-mobile';
import LinkData from '../links.data';
import NavbarMobileLinkAccordion from './navbar-mobile-links-accordiont';

type NavbarMobileMenuProps = {
  expandBreakpoint: Breakpoint,
  linksData: LinkData[]
  linksGroups: {
    title: string,
    linksData: LinkData[]
  }[]
};

const NavbarMobileMenu: React.FC<NavbarMobileMenuProps> = ({
  expandBreakpoint,
  linksData,
  linksGroups,
}) => {
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(true);
  const isExpanded = useMediaQuery((theme: Theme) => theme.breakpoints.up(expandBreakpoint));

  return (
    <>
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
        open={drawerOpen && !isExpanded}
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
            {linksGroups.map((linksGroup) => (
              <NavbarMobileLinkAccordion
                key={linksGroup.title}
                title={linksGroup.title}
                linksData={linksGroup.linksData}
                closeDrawer={() => setDrawerOpen(false)}
              />
            ))}
          </MenuList>
        </Box>
      </Drawer>
    </>
  );
};

export default NavbarMobileMenu;

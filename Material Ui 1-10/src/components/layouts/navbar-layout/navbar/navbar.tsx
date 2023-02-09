import React from 'react';
import {
  AppBar,
  Toolbar,
  type Breakpoint,

} from '@mui/material';
import routes from 'navigation/routes';
import DekstopLinkData from 'navigation/links-data';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import type LinkData from './links.data';
import NavbarMobileMenu from './mobile/navbar-mobile-menu';
import NavBarDekstopMenu from './dekstop/navbar-dekstop-menu';

const linksData: LinkData[] = [
  {
    link: routes.HomePage,
    muiName: <OtherHousesIcon />,
  },
];

const presentationalPagesData: LinkData[] = [
  { link: routes.TypographyPage, text: 'Typography' },
  { link: routes.RatingPage, text: 'Rating' },
  { link: routes.AvatarPage, text: 'Avatar' },
  { link: routes.SpeedDialPage, text: 'SpeedDial' },
  { link: routes.LinksPage, text: 'Links' },
  { link: routes.BreadCrumbsPage, text: 'BreadCrumbs' },
  { link: routes.ChipPage, text: 'Chip' },
  { link: routes.BadgePage, text: 'Badge' },
];

const controlsPagesData = [
  { link: routes.ButtonPage, text: 'Button' },
  { link: routes.TextFieldPage, text: 'Text Field' },
  { link: routes.SelectPage, text: 'Select' },
  { link: routes.RadioButtonsPage, text: 'Radios' },
  { link: routes.CheckmarksPage, text: 'Checkbox' },
  { link: routes.AutoCompletePage, text: 'AutoComplete' },
  { link: routes.SwitchPage, text: 'Switch' },
];

const wrapperPagesData = [
  { link: routes.BoxPage, text: 'Box' },
  { link: routes.CardPage, text: 'Card' },
  { link: routes.ImagesPage, text: 'Image List' },
  { link: routes.DrawerPage, text: 'Drawer' },
  { link: routes.NavBarPage, text: 'NavBar' },
  { link: routes.ListPage, text: 'List' },
];

const statefulPagesData = [
  { link: routes.AccordionPage, text: 'Accordion' },
  { link: routes.BottomNavPage, text: 'BottomNav' },
];
const expandBreakpoint: Breakpoint = 'lg';

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
      <NavbarMobileMenu
        expandBreakpoint={expandBreakpoint}
        linksData={linksData}
        linksGroups={[
          {
            title: 'Presentational',
            linksData: presentationalPagesData,
          },
          {
            title: 'Controls',
            linksData: controlsPagesData,
          },
          {
            title: 'Wrappers',
            linksData: wrapperPagesData,
          },
          {
            title: 'Stateful',
            linksData: statefulPagesData,
          },
        ]}

      />
    </Toolbar>
  </AppBar>
);

export default Navbar;

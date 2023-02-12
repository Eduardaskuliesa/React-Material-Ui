import routes from 'navigation/routes';
import {
  type Breakpoint,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import type LinkData from '../links.data';

export const linksData: LinkData[] = [
  { link: routes.HomePage, content: <HomeIcon /> },
];

export const MobilelinksGroups = [
  {
    title: 'Presentational',
    linksData: [
      { link: routes.TypographyPage, content: 'Typography' },
      { link: routes.RatingPage, content: 'Rating' },
      { link: routes.AvatarPage, content: 'Avatar' },
      { link: routes.SpeedDialPage, content: 'SpeedDial' },
      { link: routes.LinksPage, content: 'Links' },
      { link: routes.BreadCrumbsPage, content: 'BreadCrumbs' },
      { link: routes.ChipPage, content: 'Chip' },
      { link: routes.BadgePage, content: 'Badge' },
    ],
  },
  {
    title: 'Controls',
    linksData: [
      { link: routes.ButtonPage, content: 'Button' },
      { link: routes.TextFieldPage, content: 'Text Field' },
      { link: routes.SelectPage, content: 'Select' },
      { link: routes.RadioButtonsPage, content: 'Radios' },
      { link: routes.CheckmarksPage, content: 'Checkbox' },
      { link: routes.AutoCompletePage, content: 'AutoComplete' },
      { link: routes.SwitchPage, content: 'Switch' },
    ],
  },
  {
    title: 'Wrappers',
    linksData: [
      { link: routes.BoxPage, content: 'Box' },
      { link: routes.CardPage, content: 'Card' },
      { link: routes.ImagesPage, content: 'Image List' },
      { link: routes.DrawerPage, content: 'Drawer' },
      { link: routes.NavBarPage, content: 'NavBar' },
      { link: routes.ListPage, content: 'List' },
    ],
  },
  {
    title: 'Stateful',
    linksData: [
      { link: routes.AccordionPage, content: 'Accordion' },
      { link: routes.BottomNavPage, content: 'BottomNav' },
    ],
  },
];

export const expandBreakpoint: Breakpoint = 'lg';

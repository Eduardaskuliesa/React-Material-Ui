import routes from 'navigation/routes';
import {
  type Breakpoint,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import type LinkData from './links.data-type';

export const linksData: LinkData[] = [
  { link: routes.HomePage, content: <HomeIcon /> },
];

export const linksGroups = [
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
      { link: routes.AlertPage, content: 'Alert' },
      { link: routes.TimlinePage, content: 'TimeLine' },
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
      { link: routes.DateRangePickerPage, content: 'DataPicker' },
      { link: routes.DateTimePickerPage, content: 'DataTimePicker' },
      { link: routes.LoudingButtonPage, content: 'LoadingButton' },
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
      { link: routes.TabPage, content: 'Tab' },
      { link: routes.TablePage, content: 'Table' },
      { link: routes.LayoutPage, content: 'Layout' },
      { link: routes.SkeletonPage, content: 'Skeleton' },
    ],
  },
  {
    title: 'Stateful',
    linksData: [
      { link: routes.AccordionPage, content: 'Accordion' },
      { link: routes.BottomNavPage, content: 'BottomNav' },
      { link: routes.CutsomThemePage, content: 'CustomTheme' },
      { link: routes.DialogPage, content: 'Dialog' },
      { link: routes.MasonryPage, content: 'Masonry' },
      { link: routes.ProgressPage, content: 'Progress' },
      { link: routes.SnackBarPage, content: 'SnackBar' },
      { link: routes.ToolTipsPage, content: 'ToolTips' },
    ],
  },
];

export const expandBreakpoint: Breakpoint = 'lg';

import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import routes from '../../../../navigation/routes';
import NavbarLink from './navbar-links';

const linksData = [
  { link: routes.HomePage, text: 'Home' },
  { link: routes.TypographyPage, text: 'Typography' },
  { link: routes.ButtonPage, text: 'Buttons' },
  { link: routes.CheckmarksPage, text: 'Checkmarks' },
  { link: routes.RadioButtonsPage, text: 'Radio Buttons' },
  { link: routes.TextFieldPage, text: 'Text Field' },
  { link: routes.SelectPage, text: 'Select' },
];

const Navbar = () => (
  <AppBar position="sticky">
    <Toolbar>
      {linksData.map(({ link, text }) => (
        <NavbarLink key={link} to={link}>{text}</NavbarLink>
      ))}
    </Toolbar>
  </AppBar>
);

export default Navbar;

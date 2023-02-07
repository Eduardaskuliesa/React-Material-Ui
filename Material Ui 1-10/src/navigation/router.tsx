import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from 'pages/home-page';
import NavbarLayout from 'components/layouts/navbar-layout';
import MuiTypography from 'pages/mui-typography-page';
import MuiButtonPage from 'pages/mui-button-page';
import MuiCheckMarkPage from 'pages/mui-checkmark-page';
import MuiRadioButtonPage from 'pages/mui-radio-button-page';
import MuiSelectPage from 'pages/mui-select-page';
import MuiTextFieldPage from 'pages/mui-textfield-page';
import routes from './routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarLayout />,
    children: [
      {
        path: routes.HomePage,
        element: <HomePage />,
      },
      {
        path: routes.TypographyPage,
        element: <MuiTypography />,
      },
      {
        path: routes.ButtonPage,
        element: <MuiButtonPage />,
      },
      {
        path: routes.CheckmarksPage,
        element: <MuiCheckMarkPage />,
      },
      {
        path: routes.RadioButtonsPage,
        element: <MuiRadioButtonPage />,
      },
      {
        path: routes.SelectPage,
        element: <MuiSelectPage />,
      },
      {
        path: routes.TextFieldPage,
        element: <MuiTextFieldPage />,
      },

    ],
  },
]);

export default router;

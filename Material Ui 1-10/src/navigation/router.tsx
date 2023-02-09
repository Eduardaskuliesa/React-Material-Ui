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
import MuiSwitchPage from 'pages/mui-switch-page';
import MuiRatingPage from 'pages/mui-rating-page';
import MuiAutoCompletePage from 'pages/mui-auto-complete-page';
import MuiBoxPage from 'pages/mui-box-page';
import MuiCardPage from 'pages/mui-card-page';
import MuiAccordionPage from 'pages/mui-accordion-page';
import MuiImageListPage from 'pages/mui-images-page';
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
      {
        path: routes.SwitchPage,
        element: <MuiSwitchPage />,
      },
      {
        path: routes.RatingPage,
        element: <MuiRatingPage />,
      },
      {
        path: routes.AutoCompletePage,
        element: <MuiAutoCompletePage />,
      },
      {
        path: routes.BoxPage,
        element: <MuiBoxPage />,
      },
      {
        path: routes.CardPage,
        element: <MuiCardPage />,
      },
      {
        path: routes.AccordionPage,
        element: <MuiAccordionPage />,
      },
      {
        path: routes.ImagesPage,
        element: <MuiImageListPage />,
      },

    ],
  },
]);

export default router;

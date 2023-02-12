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
import MuiAvatartPage from 'pages/mui-avatar-page';
import MuiBottomNavigationPage from 'pages/mui-bottom-navigation-page';
import MuiBreadcrumbsPage from 'pages/mui-breadcumbs-page';
import MuiLinksPage from 'pages/mui-links-page';
import MuiDrawerPage from 'pages/mui-drawer-page';
import MuiNavBarPage from 'pages/mui-navbar-page';
import MuiSpeedDialPage from 'pages/mui-speed-dial-page';
import MuiListPage from 'pages/mui-list-page';
import MuiBadgePage from 'pages/mui-badge-page';
import MuiChipPage from 'pages/mui-chip-page';
import MuiAlertPage from 'pages/mui-alert';
import MuiCustomThemePage from 'pages/mui-custom-theme';
import MuiTooltip from 'pages/mui-tooltips';
import MuiTimelinePage from 'pages/mui-timline-page';
import MuiTabsPage from 'pages/mui-tab-page';
import MuiSnackbarPage from 'pages/mui-snackbar-page';
import MuiSkeletonPage from 'pages/mui-skeleton-page';
import MuiDateRangePickerPage from 'pages/mui-date-range-picker-page';
import MuiDateTimePickerPage from 'pages/mui-date-time-picker-page';
import MuiDialogPage from 'pages/mui-dialog-page';
import MuiLayoutPage from 'pages/mui-layout-page';
import MuiLoadingButtonPage from 'pages/mui-loauding-button-page';
import MuiMasonryPage from 'pages/mui-masonry';
import MuiProgressPage from 'pages/mui-progress-page';
import MuiTablePage from 'pages/mui-table';
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
      {
        path: routes.AvatarPage,
        element: <MuiAvatartPage />,
      },
      {
        path: routes.BottomNavPage,
        element: <MuiBottomNavigationPage />,
      },
      {
        path: routes.BreadCrumbsPage,
        element: <MuiBreadcrumbsPage />,
      },
      {
        path: routes.LinksPage,
        element: <MuiLinksPage />,
      },
      {
        path: routes.DrawerPage,
        element: <MuiDrawerPage />,
      },
      {
        path: routes.NavBarPage,
        element: <MuiNavBarPage />,
      },
      {
        path: routes.SpeedDialPage,
        element: <MuiSpeedDialPage />,
      },
      {
        path: routes.ListPage,
        element: <MuiListPage />,
      },
      {
        path: routes.BadgePage,
        element: <MuiBadgePage />,
      },
      {
        path: routes.ChipPage,
        element: <MuiChipPage />,
      },
      {
        path: routes.AlertPage,
        element: <MuiAlertPage />,
      },
      {
        path: routes.CutsomThemePage,
        element: <MuiCustomThemePage />,
      },
      {
        path: routes.ToolTipsPage,
        element: <MuiTooltip />,
      },
      {
        path: routes.TimlinePage,
        element: <MuiTimelinePage />,
      },
      {
        path: routes.TabPage,
        element: <MuiTabsPage />,
      },
      {
        path: routes.SnackBarPage,
        element: <MuiSnackbarPage />,
      },
      {
        path: routes.SkeletonPage,
        element: <MuiSkeletonPage />,
      },
      {
        path: routes.DateRangePickerPage,
        element: <MuiDateRangePickerPage />,
      },
      {
        path: routes.DateTimePickerPage,
        element: <MuiDateTimePickerPage />,
      },
      {
        path: routes.DialogPage,
        element: <MuiDialogPage />,
      },
      {
        path: routes.LayoutPage,
        element: <MuiLayoutPage />,
      },
      {
        path: routes.LoudingButtonPage,
        element: <MuiLoadingButtonPage />,
      },
      {
        path: routes.MasonryPage,
        element: <MuiMasonryPage />,
      },
      {
        path: routes.ProgressPage,
        element: <MuiProgressPage />,
      },
      {
        path: routes.TablePage,
        element: <MuiTablePage />,
      },

    ],
  },
]);

export default router;

const routes = {
  HomePage: '/home',
  TypographyPage: '/typography',
  ButtonPage: '/buttons',
  CheckmarksPage: '/checkmarks',
  RadioButtonsPage: '/radios',
  TextFieldPage: '/textfield',
  SelectPage: '/select',
  SwitchPage: '/switch',
  RatingPage: '/rating',
  AutoCompletePage: 'autoComplete',
  BoxPage: '/box',
  CardPage: '/card',
  AccordionPage: '/accordion',
  ImagesPage: '/images',
  AvatarPage: '/avatar',
  BottomNavPage: '/bottomNav',
  DrawerPage: '/drawer',
  BreadCrumbsPage: '/breadcrumbs',
  SpeedDialPage: '/speedDial',
  LinksPage: '/links',
  NavBarPage: '/navbar',
  BadgePage: '/badge',
  ChipPage: '/chip',
  ListPage: '/list',
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;

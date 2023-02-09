import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { type RouteLink } from 'navigation/routes';

type LinkData = {
  link: RouteLink,
  text?: string,
  muiName?: ReactJSXElement
};

export default LinkData;

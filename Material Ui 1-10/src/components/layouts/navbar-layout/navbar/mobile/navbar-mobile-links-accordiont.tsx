import React from 'react';
import { useLocation } from 'react-router-dom';

import {
  Accordion,
  Typography,
  MenuList,
  MenuItem,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavbarMobileLink from './navbar-mobile';
import LinkData from '../links.data';

type NavbarMobileLinkAccordionProps = {
  title: string,
  linksData: LinkData[]
  closeDrawer: VoidFunction
};

const NavbarMobileLinkAccordion: React.FC<NavbarMobileLinkAccordionProps> = ({
  title,
  linksData,
  closeDrawer,
}) => {
  const { pathname } = useLocation();
  const hasActiveLink = linksData.map<string>(({ link }) => link).includes(pathname);

  return (
    <Accordion
      defaultExpanded={hasActiveLink}
      disableGutters
      sx={{
        margin: 0,
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color={hasActiveLink ? 'primary' : 'inherit'}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <MenuList sx={{ p: 0 }}>
          {linksData.map(({ link, text }) => (
            <MenuItem
              key={link}
              onClick={closeDrawer}
              sx={{
                p: 0,
              }}
            >
              <NavbarMobileLink to={link}>{text}</NavbarMobileLink>
            </MenuItem>
          ))}
        </MenuList>
      </AccordionDetails>
    </Accordion>
  );
};

export default NavbarMobileLinkAccordion;

import React from 'react';
import {
  Accordion,
  Typography,
  MenuList,
  MenuItem,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionProps } from '@mui/material/Accordion';
import NavbarMobileLink from './navbar-mobile';
import LinkData from '../links.data-type';

type NavbarMobileLinkAccordionProps = {
  title: string,
  linksData: LinkData[]
  closeMenu: VoidFunction
  expanded: boolean,
  onChange: AccordionProps['onChange'],
  hasActiveLink: boolean
};

const NavbarMobileLinkAccordion: React.FC<NavbarMobileLinkAccordionProps> = ({
  title,
  linksData,
  closeMenu,
  expanded,
  onChange,
  hasActiveLink,
}) => (
  <Accordion expanded={expanded} onChange={onChange} disableGutters>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography color={hasActiveLink ? 'primary' : 'inherit'}>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <MenuList sx={{ p: 0 }}>
        {linksData.map(({ link, content }) => (
          <MenuItem key={link} onClick={closeMenu} sx={{ p: 0 }}>
            <NavbarMobileLink to={link}>{content}</NavbarMobileLink>
          </MenuItem>
        ))}
      </MenuList>
    </AccordionDetails>
  </Accordion>
);

export default NavbarMobileLinkAccordion;

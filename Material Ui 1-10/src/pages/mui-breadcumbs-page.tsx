import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import {
  Breadcrumbs, Box, Link, Typography,
} from '@mui/material';

const MuiBreadcrumbsPage = () => (
  <Box m={2}>
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" />}
      maxItems={2}
    >
      <Link underline="hover" href="#g">Home</Link>
      <Link underline="hover" href="#g">Buy</Link>
      <Link underline="hover" href="#g">Sell</Link>
      <Typography color="text.secondary">Shoes</Typography>
    </Breadcrumbs>
  </Box>
);

export default MuiBreadcrumbsPage;

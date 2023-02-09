import React from 'react';
import { Stack, Link, Typography } from '@mui/material';

const MuiLinksPage = () => (
  <Stack spacing={2} direction="row" m={4}>
    <Link href="#g">Link</Link>
    <Typography variant="h6">
      <Link href="#g" color="secondary" underline="hover">Second</Link>
    </Typography>

  </Stack>
);

export default MuiLinksPage;

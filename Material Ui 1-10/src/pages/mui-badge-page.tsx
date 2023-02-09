import { Stack, Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import React from 'react';

const MuiBadgePage = () => (
  <Stack spacing={2} direction="row">
    <Badge badgeContent={5} color="secondary">
      <MailIcon />
    </Badge>
    <Badge badgeContent={0} color="secondary" showZero>
      <MailIcon />
    </Badge>
    <Badge badgeContent={100} color="secondary" max={999}>
      <MailIcon />
    </Badge>
    <Badge color="secondary" variant="dot">
      <MailIcon />
    </Badge>
  </Stack>
);
export default MuiBadgePage;

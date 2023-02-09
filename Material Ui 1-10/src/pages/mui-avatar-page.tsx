import React from 'react';
import { Stack, Avatar, AvatarGroup } from '@mui/material';

const MuiAvatartPage = () => (
  <Stack spacing={4}>
    <Stack direction="row" spacing={1}>
      <Avatar sx={{ bgcolor: 'primary.light' }}>
        BMW

      </Avatar>
      <Avatar sx={{
        bgcolor: 'success.litght',
      }}
      >
        BENZ

      </Avatar>
    </Stack>
    <Stack direction="row" spacing={1}>
      <AvatarGroup>
        <Avatar
          sx={{ bgcolor: 'primary.light' }}
          variant="rounded"
        >
          BMW

        </Avatar>
        <Avatar sx={{
          bgcolor: 'success.litght',
        }}
        >
          BENZ

        </Avatar>
        <Avatar src="https://randomuser.me/api/portraits/women/28.jpg" />
        <Avatar src="https://randomuser.me/api/portraits/women/51.jpg" />
      </AvatarGroup>
    </Stack>
  </Stack>
);

export default MuiAvatartPage;

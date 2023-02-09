import React from 'react';
import {
  Drawer, Box, Typography, IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const MuiDrawerPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  return (
    <>
      <IconButton size="small">
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="bottom"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          p={2}
          width="250px"
          textAlign="center"
          role="presentation"
        >
          <Typography variant="h6" component="div">
            SidePANELLLE
          </Typography>

        </Box>
      </Drawer>
    </>
  );
};

export default MuiDrawerPage;

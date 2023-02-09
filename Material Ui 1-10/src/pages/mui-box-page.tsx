import {
  Box, Stack, Divider, Grid, Paper,
} from '@mui/material';
import React from 'react';

const MuiBoxPage = () => (
  <Paper sx={{ padding: '32px' }}>
    <Stack
      sx={{ border: '1px solid' }}
      direction="row"
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          height: '100px',
          width: '100px',
          padding: '16px',
          '&:hover': {
            backgroundColor: 'primary.light',
          },
        }}
      >
        Deze
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={3}
      >
        Deze
      </Box>
    </Stack>
    <Grid container mt={4} rowSpacing={2} columnSpacing={1}>
      <Grid item xs={6}>
        <Box bgcolor="success.dark" p={2}>Item 1</Box>
      </Grid>
      <Grid item xs={6}>
        <Box bgcolor="success.light" p={2}>Item 2</Box>
      </Grid>
      <Grid item xs={6}>
        <Box bgcolor="primary.light" p={2}>Item 3</Box>
      </Grid>
      <Grid item xs={6}>
        <Box bgcolor="primary.dark" p={2}>Item 4</Box>
      </Grid>
    </Grid>
  </Paper>

);

export default MuiBoxPage;

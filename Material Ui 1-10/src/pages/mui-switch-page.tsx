import { Box, FormControlLabel, Switch } from '@mui/material';
import React from 'react';

const MuiSwitchPage = () => {
  const [chekced, setChecked] = React.useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <Box>
      <FormControlLabel
        label="dark mode"
        control={<Switch checked={chekced} onChange={handleChange} color="success" />}
      />
    </Box>

  );
};
export default MuiSwitchPage;

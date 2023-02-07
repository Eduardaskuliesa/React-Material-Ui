import React, { useState } from 'react';
import { Stack, TextField, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const MuiTextFieldPage = () => {
  const [value, setValue] = useState('');
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={4}>
        <TextField label="name" variant="outlined" />
        <TextField label="name" variant="filled" />
        <TextField label="name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input"
          required
          color="secondary"
          error={!value}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          helperText={!value ? 'Required' : 'Do not share password'}
        />
        <TextField
          label="password"
          type="password"
          color="secondary"
          helperText="Do not share your password with anyone"
        />
        <TextField label="Read Only" color="secondary" inputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Password"
          type="password"
          helperText="password must contains atleast one uperCase"
          InputProps={{
            endAdornment: <InputAdornment position="end"><VisibilityIcon /></InputAdornment>,
          }}
        />
      </Stack>
    </Stack>

  );
};

export default MuiTextFieldPage;

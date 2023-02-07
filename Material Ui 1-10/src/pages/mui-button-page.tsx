import {
  Button, Stack, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import React, { useState } from 'react';

const MuiButtonPage = () => {
  const [formats, setFormats] = useState<string | null>(null);
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string | null,
  ) => {
    setFormats(updatedFormats);
  };
  return (
    <Stack spacing={4} marginTop={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" color="info">Info</Button>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" color="success">success</Button>
        <Button variant="contained" color="warning">Warning</Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="medium">Medium</Button>
        <Button variant="contained" size="large">Large</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />}>Send</Button>
        <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
        <IconButton aria-label="send" color="warning" size="large">
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction="row">
        <ButtonGroup variant="contained" orientation="vertical" size="small">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ToggleButtonGroup aria-label="text formating" value={formats} onChange={handleFormatChange} exclusive>
          <ToggleButton value="bold" aria-label="bold"><FormatBoldIcon /></ToggleButton>
          <ToggleButton value="italic" aria-label="italic"><FormatItalicIcon /></ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined"><FormatUnderlinedIcon /></ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
export default MuiButtonPage;

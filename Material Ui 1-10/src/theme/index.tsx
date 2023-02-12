import { createTheme, colors } from '@mui/material';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0077b6',
    },
    secondary: {
      main: colors.orange[500],
    },
    neutral: {
      main: colors.grey[500],
    },
  },
  zIndex: {
    appBar: 1250,
  },
});

export default theme;

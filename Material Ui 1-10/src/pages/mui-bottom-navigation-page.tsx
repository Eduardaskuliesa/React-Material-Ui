import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';

const MuiBottomNavigationPage = () => {
  const [value, setValue] = React.useState(0);
  return (
    <BottomNavigation
      sx={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
      }}
      value={value}
      onChange={(event, newValue) => { setValue(newValue); }}
      showLabels
    >
      <BottomNavigationAction label="HOME" icon={<HomeIcon />} />
      <BottomNavigationAction label="FAVORITE" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="PROFILE" icon={<PersonIcon />} />
    </BottomNavigation>
  );
};

export default MuiBottomNavigationPage;

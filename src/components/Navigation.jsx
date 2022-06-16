import React, { useEffect } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function Navigation() {
  const [value, setValue] = React.useState('');
  let navigate = useNavigate();

  useEffect(() => {
    // Update the document title using the browser API
    console.log(value);
  }, [value]);
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          navigate(newValue);
        }}
        showLabels
        color={'secondary'}
      >
        <BottomNavigationAction label="main" value="/main" />
        <BottomNavigationAction label="sub" value="/sub" />
        <BottomNavigationAction label="pokemon" value="/pokemon" />
      </BottomNavigation>
    </Paper>
  );
}

export default Navigation;

import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import DoneIcon from '@material-ui/icons/Done';
import mainTheme from '../../theme/theme';

const theme1 = createMuiTheme(mainTheme);

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <ThemeProvider theme={theme1}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction label="all" icon={<AllInclusiveIcon />} />
        <BottomNavigationAction label="active" icon={<DirectionsRunIcon />} />
        <BottomNavigationAction label="done" icon={<DoneIcon />} />
      </BottomNavigation>
    </ThemeProvider>
  );
}

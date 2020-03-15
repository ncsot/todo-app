import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import DoneIcon from '@material-ui/icons/Done';
import mainTheme from '../../theme/theme';

const theme1 = createMuiTheme(mainTheme);

export default function SimpleBottomNavigation({ filter, onFilterChange }) {
  const [value, setValue] = React.useState(filter);
  const handleChange = (e, newValue) => {
    onFilterChange(newValue);
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={theme1}>
      <BottomNavigation value={value} onChange={handleChange} showLabels>
        <BottomNavigationAction
          label="all"
          value="all"
          icon={<AllInclusiveIcon />}
        />
        <BottomNavigationAction
          label="active"
          value="active"
          icon={<DirectionsRunIcon />}
        />
        <BottomNavigationAction label="done" value="done" icon={<DoneIcon />} />
      </BottomNavigation>
    </ThemeProvider>
  );
}

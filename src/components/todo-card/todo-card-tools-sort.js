
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import DoneIcon from '@material-ui/icons/Done';


const useStyles = makeStyles({
  root: {
    
    
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="all" icon={<AllInclusiveIcon />} />
      <BottomNavigationAction label="active" icon={<DirectionsRunIcon />} />
      <BottomNavigationAction label="done" icon={<DoneIcon />} />
    </BottomNavigation>
  );
}

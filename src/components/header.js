import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import logo from './checklist_logo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'tomato',
  },
  appbar: {
    background: 'transparent',
    boxShadow: '',
  },
  logo: {
    height: "4em"
  },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  title: {
    flexGrow: 1,
  },
}));

function AppHeader() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Toolbar>
            <img src= { logo } alt={"logo"} className={classes.logo} />
          </Toolbar>
          <Typography variant="h6" className={classes.title}>
            Todo App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppHeader;

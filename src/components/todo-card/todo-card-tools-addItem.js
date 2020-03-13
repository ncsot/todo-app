import React, { Component } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import mainTheme from '../../theme/theme';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
const styles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  margin: {
    margin: theme.spacing(1),
    marginBottom: '1rem',
  },
});

const theme1 = createMuiTheme(mainTheme);

class AddItem extends Component {
  render() {
    const { classes, onAdded } = this.props;

    return (
      <form className={classes.root} noValidate>
        <ThemeProvider theme={theme1}>
          <TextField
            className={classes.margin}
            label="Add Item"
            variant="outlined"
            id="Add-item-input"
          />
          <Fab
            color="primary"
            aria-label="add"
            className={classes.margin}
            onClick={() => onAdded('Hello Wolrd')}
          >
            <AddIcon />
          </Fab>
        </ThemeProvider>
      </form>
    );
  }
}
export default withStyles(styles)(AddItem);

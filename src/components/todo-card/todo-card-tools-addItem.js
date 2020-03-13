import React, { Component } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import mainTheme from '../../theme/theme';
import { withStyles } from '@material-ui/core/styles';
const styles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
});

// const theme = createMuiTheme({
//   palette: {
//     primary: red,
//   },
// });
const theme1 = createMuiTheme(mainTheme);
class AddItem extends Component {
  render() {
    console.log('PROPS= ', this.props);
    console.log('theme = ', theme1);
    const { classes } = this.props;
    console.log('classec = ', classes);
    return (
      <form className={classes.root} noValidate>
        <ThemeProvider theme={theme1}>
          <TextField
            className={classes.margin}
            label="ThemeProvider"
            variant="outlined"
            id="mui-theme-provider-standard-input"
          />
        </ThemeProvider>
      </form>
    );
  }
}
export default withStyles(styles)(AddItem);

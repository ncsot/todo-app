import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';

const styles = (theme) => ({
  margin: {
    margin: theme.spacing(3),
  },
});

class SearchBar extends Component {
  state = {
    term: '',
  };
  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end" justify="center">
          <Grid item>
            <SearchIcon />
          </Grid>
          <Grid item>
            <TextField
              id="input-with-icon-grid"
              label="Search Item"
              value={this.state.term}
              onChange={this.onSearchChange}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

// const SearchBar = () => {
//   return <input placeholder="Search"></input>;
// };

export default withStyles(styles)(SearchBar);

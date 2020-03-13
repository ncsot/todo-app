import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

export default class TodoListItem extends Component {
  state = {
    isDone: false,
    isImportant: false,
  };
  onLabelClick = () => {
    this.setState(({isDone}) => {
      return { isDone: !isDone };
    });
  };
  onMarkImportant = () => {
    this.setState(({isImportant}) => {
      return { isImportant: !isImportant };
    });
  };
  render() {
    const { label, onDeleted } = this.props;
    const style = {};
    const { isDone, isImportant } = this.state;

    if (isDone) {
      style.textDecoration = 'line-through';
      style.fontWeight = 100;
    }
    if (isImportant) {
      style.color = '#FF5722';
      style.fontWeight = 'bold';
    }
    return (
      <ListItem button onClick={this.onLabelClick}>
        <ListItemText
          primary={
            <Typography variant="body1" style={style}>
              {label}
            </Typography>
          }
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" onClick={this.onMarkImportant}>
            <PriorityHighIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete" onClick={onDeleted}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

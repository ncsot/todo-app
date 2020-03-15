import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

export default class TodoListItem extends Component {
  render() {
    const {
      label,
      onDeleted,
      onToggleImportant,
      onToggleDone,
      important,
      done,
    } = this.props;
    const style = {};

    if (done) {
      style.textDecoration = 'line-through';
      style.fontWeight = 100;
    }
    if (important) {
      style.color = '#FF5722';
      style.fontWeight = 'bold';
    }

    return (
      <ListItem button onClick={onToggleDone}>
        <ListItemText
          primary={
            <Typography variant="body1" style={style}>
              {label}
            </Typography>
          }
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" onClick={onToggleImportant}>
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

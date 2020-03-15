import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import TodoListItem from './todo-list-item';

const useStyles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: 560,
    backgroundColor: theme.palette.background.paper,
  },
});
class TodoListClass extends Component {
  render() {
    const { classes } = this.props;
    const { todos, onDeleted, onToggleDone, onToggleImportant } = this.props;
    console.log('todos = ', todos)
    return (
      <List className={classes.root}>
        {todos.map((item) => {
          const { id, ...itemProps } = item;
          return (
            <React.Fragment key={id}>
              <TodoListItem
                {...itemProps}
                onDeleted={() => onDeleted(id)}
                onToggleDone={() => onToggleDone(id)}
                onToggleImportant={() => onToggleImportant(id)}
              />
              <Divider light variant="middle" />
            </React.Fragment>
          );
        })}
      </List>
    );
  }
}

export default withStyles(useStyles)(TodoListClass);

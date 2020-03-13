import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TodoList from './todo-list';
import ToolsSort from './todo-card-tools-sort';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import Input from '@material-ui/core/Input';
import ToolsAddItem from './todo-card-tools-addItem';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  divider: {
    backgroundColor: 'tomato',
  },
  cardHeader: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    fontSize: '1.6rem',
    '@media (min-width:600px)': {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.6rem',
    },
  },
}));

const TodoCard = ({ tododata, onDeleted, onAdded }) => {
  console.log('tododata in card = ', tododata);
  const {
    name,
    data: [...todos],
  } = tododata;

  const classes = useStyles();
  const date = moment().format('MMMM Do YYYY');
  return (
    <Grid container spacing={1} alignItems="flex-end" justify="center">
      <Card className={classes.root} variant="outlined">
        <CardHeader
          title={
            <Input
              defaultValue={name}
              placeholder="Input name"
              inputProps={{ 'aria-label': 'description' }}
              className={classes.cardHeader}
            />
          }
          subheader={date}
        />
        <ToolsSort />
        <CardContent>
          <TodoList todos={todos} onDeleted={onDeleted}/>
        </CardContent>
        <ToolsAddItem />
      </Card>
    </Grid>
  );
};

export default TodoCard;

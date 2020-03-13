import React, { Component } from 'react';
import AppHeader from './header';
import SearchBar from './search-bar';
import TodoCard from './todo-card/todo-card';

export default class App extends Component {
  fakeid = 100;
  state = {
    todoData: {
      name: 'Current',
      data: [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Build', important: true, id: 2 },
        { label: 'Repeat', important: false, id: 3 },
        { label: 'Drink juice', important: false, id: 4 },
      ],
    },
  };
  deleteItem = (id) => {
    console.log(id);
    console.log('state=', this.state);
    this.setState(({ todoData }) => {
      console.log('todos =  now = ', todoData.data);
      const idx = todoData.data.findIndex((el) => el.id === id);

      const newArray = [
        ...todoData.data.slice(0, idx),
        ...todoData.data.slice(idx + 1),
      ];
      console.log('in func deleteItem = ', todoData);
      return {
        todoData: {
          data: newArray,
        },
      };
    });
  };

  addItem = (text) => {
    console.log('add ', text);
    const newItem = {
      label: text,
      important: false,
      id: this.fakeid++,
    };
    this.setState(({ todoData }) => {
      const newArray = [...todoData.data, newItem];

      return {
        todoData: {
          data: newArray,
        },
      };
    });
  };

  render() {
    return (
      <div>
        <AppHeader />
        <SearchBar />
        <TodoCard
          tododata={this.state.todoData}
          onDeleted={this.deleteItem}
          onAdded={this.addItem}
        />
      </div>
    );
  }
}

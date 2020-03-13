import React, { Component } from 'react';
import AppHeader from './header';
import SearchBar from './search-bar';
import TodoCard from './todo-card/todo-card';

export default class App extends Component {
  it = 1;

  fakeid = 100;
  state = {
    todoData: {
      name: 'Current',
      data: [
        this.createTodoItem('Drink Coffee'),
        this.createTodoItem('Build'),
        this.createTodoItem('Repeat'),
        this.createTodoItem('Drink juice'),
      ],
    },
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.fakeid++,
    };
  };
  

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.data.findIndex((el) => el.id === id);

      const newArray = [
        ...todoData.data.slice(0, idx),
        ...todoData.data.slice(idx + 1),
      ];

      return {
        todoData: {
          data: newArray,
        },
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      const newArray = [...todoData.data, newItem];

      return {
        todoData: {
          data: newArray,
        },
      };
    });
  };

  onToggleDone = (id) => {
    console.log('Done = ', id);
  };

  onToggleImportant = (id) => {
    console.log('Important = ', id);
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
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
      </div>
    );
  }
}

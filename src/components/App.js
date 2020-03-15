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
        this.createTodoItem('Drink Coffee'),
        this.createTodoItem('Build'),
        this.createTodoItem('Repeat'),
        this.createTodoItem('Drink juice'),
      ],
    },
    term: '',
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.fakeid++,
    };
  }

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

  toggleProperty(arr, id, propName) {
    const idx = arr.data.findIndex((el) => el.id === id);
    const prevItem = arr.data[idx];
    const nextItem = { ...prevItem, [propName]: !prevItem[propName] };
    return [...arr.data.slice(0, idx), nextItem, ...arr.data.slice(idx + 1)];
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: { data: this.toggleProperty(todoData, id, 'done') },
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: { data: this.toggleProperty(todoData, id, 'important') },
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
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
      </div>
    );
  }
}

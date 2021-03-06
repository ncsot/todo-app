import React, { Component } from 'react';
import AppHeader from './header';
import SearchBar from './search-bar';
import TodoCard from './todo-card/todo-card';

export default class App extends Component {
  fakeid = 100;
  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Build'),
      this.createTodoItem('Repeat'),
      this.createTodoItem('Drink juice'),
    ],
    name: 'Current',
    term: '',
    filter: 'all',
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
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

      return {
        todoData: newArray,
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem];

      return {
        todoData: newArray,
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const prevItem = arr[idx];
    const nextItem = { ...prevItem, [propName]: !prevItem[propName] };
    return [...arr.slice(0, idx), nextItem, ...arr.slice(idx + 1)];
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done'),
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important'),
      };
    });
  };

  searcItem(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  }

  filterItem(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  onSearchChange = (term) => {
    this.setState({ term });
  };
  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { todoData, name, term, filter } = this.state;
    const visibleItems = this.filterItem(this.searcItem(todoData, term), filter);

    return (
      <div>
        <AppHeader />
        <SearchBar onSearchChange={this.onSearchChange} />
        <TodoCard
          todoData={visibleItems}
          nameCard={name}
          filter={filter}
          onDeleted={this.deleteItem}
          onAdded={this.addItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
          onFilterChange={this.onFilterChange}
        />
      </div>
    );
  }
}

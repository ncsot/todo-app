import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/header';
import SearchBar from './components/search-bar';
import MainList from './components/main-list';

const App = () => {
  const todoData = [
    {label:'Drink Coffee', important: false},
    {label:'Build', important: true},
    {label:'Repeat', important: false},
  ]
  return (
    <div>
      <AppHeader />
      <SearchBar />
      <MainList todos={todoData}/>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));
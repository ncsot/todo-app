import React from 'react';
import MainListItem from './main-list-item';

const MainList = ({ todos }) => {
  const items = todos.map((item) => {
    return (
      <li>
        <MainListItem {...item} />
      </li>
    );
  });
  
  return <ul>{items}</ul>;
};

export default MainList;

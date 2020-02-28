import React from 'react';

const MainListItem = ({ label, important = false }) => {
  const style = {
    color: important ? 'tomato' : 'black',
  };
  return <span style={style}>{label}</span>;
};

export default MainListItem;

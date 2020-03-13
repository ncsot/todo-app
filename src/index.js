import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App'

const View = () => {
  return (
    <div>
      <App />
    </div>
  );
};
ReactDOM.render(<View />, document.getElementById('root'));

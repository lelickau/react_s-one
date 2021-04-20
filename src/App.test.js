
import MainApp from './App';
import ReactDOM from 'react-dom';
import React from 'react';

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//npm run test -- запуск теста в консоли
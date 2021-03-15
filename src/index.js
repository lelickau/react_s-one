import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
	{post:'Hello Tom' , id:1, likesCount: 25},
	{post:'hi Tom How are you?' , id:2, likesCount: 120},
	{post:'hi Tom What do you do?' , id:3, likesCount: 500},
	{post:'hi Tom I am fine' , id:4, likesCount: 333},
];

let dialogs = [
  {name:'Tommi' , id:1},
  {name:'Nikoly' , id:2},
  {name:'Rihana' , id:3},
  {name:'Megan' , id:4},
  {name:'Nikoly' , id:5},
];

let messages = [
  {message:'hi Tom' , id:1},
  {message:'hi Tom How are you?' , id:2},
  {message:'hi Tom What do you do?' , id:3},
  {message:'hi Tom I am fine' , id:4},
];

ReactDOM.render(
  <React.StrictMode>
    <App propsPost={{posts, dialogs, messages}}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

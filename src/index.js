import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';                           //  ./App = ./App.js
import reportWebVitals from './reportWebVitals';
import ToDoList from './ToDoList'; 

ReactDOM.render(
  //<App /> = jsx
  <React.StrictMode>
    <ToDoList />                                       
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

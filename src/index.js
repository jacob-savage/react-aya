import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Testing from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <head><script src="http://localhost:8097"></script></head>
    <Testing />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

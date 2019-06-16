import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import 'bootstrap/dist/css/bootstrap.min.css'

if (document.getElementById('root')) {
  ReactDOM.render(<App />, document.getElementById('root'));
} else {
  console.error("Root container was not fund!", {
    action: "ReactDOM.render(<App />, document.getElementById('root'))"
  });
}
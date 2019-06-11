import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main.js'

if (document.getElementById('root')) {
  ReactDOM.render(<Main />, document.getElementById('root'));
} else {
  console.error("Root container was not fund!", {
    action: "ReactDOM.render(<Main />, document.getElementById('root'))"
  });
}
import React from 'react';
import ReactDOM from 'react-dom';
import Student from './App';
import './index.css';
function Result(){
  return(
    <div>
      <Student/>
    </div>
  );
}
ReactDOM.render(<Result />, document.getElementById('root'));


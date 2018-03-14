import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/pricing.css';
import App from './App';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };
  
  const element = (
    <div className="container">
      Hello, {formatName(user)}!
    </div>
  );
  
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );
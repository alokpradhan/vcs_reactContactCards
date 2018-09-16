import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactCards from './ContactCards';

const people = [
  {
    name: 'Alok',
    phone: '111-111-1111',
    favorite: true
  },
  {
    name: 'Eric',
    phone: '112-112-1111',
    favorite: false 
  }, 
  {
    name: 'Michael',
    phone: '113-113-1111',
    favorite: true
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Contact Cards App</h1>
        </header>
        <ContactCards people={people} />
      </div>
    );
  }
}

export default App;

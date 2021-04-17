import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [
      { name: 'sharooq'}, { name: 'naveen'}, { name: 'jefree'}
    ]}
  }
  render(){
    return (
      <div className="App">
        { 
          this.state.monsters.map((monster) => <h1 key={monster.name}>
            {monster.name}
          </h1>)
        }
      </div>
    );
  }
}
export default App;

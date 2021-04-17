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
  async componentDidMount() {
    const data = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    this.setState({monsters: data})
  }

  render(){
    return (
      <div className="App">
        { 
          this.state.monsters.map((monster) => <h1 key={monster.id}>
            {monster.name}
          </h1>)
        }
      </div>
    );
  }
}
export default App;

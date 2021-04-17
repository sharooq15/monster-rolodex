import React, { Component } from 'react';
import {
  CardList
} from '../src/components/card-list/card-list';
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
        <CardList monsters={this.state.monsters}/> 
      </div>
    );
  }
}
export default App;

import React, { Component } from 'react';
import {
  CardList
} from '../src/components/card-list/card-list';
import{SearchBox} from '../src/components/search-box/search-box';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [
      { name: 'sharooq'}, { name: 'naveen'}, { name: 'jefree'}
    ],
    searchText: '', 
  }
  }
  async componentDidMount() {
    const data = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    this.setState({monsters: data})
  }

  render(){
    const {monsters, searchText} = this.state;
    const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchText.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeHolder="Search Text" 
          handleTextChange={e => this.setState({searchText:e.target.value})}
          />
        <CardList monsters={filteredMonsters}/> 
      </div>
    );
  }
}
export default App;

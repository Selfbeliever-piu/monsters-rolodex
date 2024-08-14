import { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import CardList from './components/cards/card-list.component.tsx';
import SearchBox from './components/search-box/search-box.component.tsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(resp => {
      if (resp) {
        console.log(resp)
        this.setState(() => {
          return {monsters: resp}
        })
      }
    })
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    })
  }

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    // const filteredMonsters = (event) => {
    //   const searchString = event.target.value.toLowerCase();
    //   return monsters.filter(monster => monster.name.toLowerCase().includes(searchString));
    //   return filterResult
    // }
    
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField)});

    return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      {/* <input placeholder='search monster' className='search-box' type='search' onChange={onSearchChange}/> */}
      <SearchBox onChangeHandler={onSearchChange} placeholder='search monster'/>
      <CardList monsters={filteredMonsters}/>
    </div>
    );
  }
}

export default App;

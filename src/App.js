import {Component} from 'react'
import {CardList} from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component';
import logo from './logo.svg';
import './App.css';


class App extends Component{

  constructor(){
    super();
    this.state = {
      monsters :[
        ],
        SearchField: ''
    };
    this.handleChange = this.handleChange.bind
  }

  componentDidMount(){

    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({monsters: users}))
  }



  handleChange(e){
    this.setState({SearchField:e.target.value});
  }
  render(){
    const {monsters, SearchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>  
      monster.name.toLowerCase().includes(SearchField.toLocaleLowerCase()))
     return (
        <div className="App">
          {/* <input type='search'
           placeholder='Search monsters' 
           onChange={e => this.setState({SearchField:e.target.value}) } /> */}

           <h1>Masters Rolodex</h1>
           <SearchBox 
           placeholder={'Search monsters'}
           handleChange = {this.handleChange}
           //handleChange= {e => this.setState({SearchField:e.target.value}) }
           />
          {/* <CardList monsters = {this.state.monsters}/> */}
          <CardList monsters = {filteredMonsters}/>

        </div>
      );
   }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           This is our first react app
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

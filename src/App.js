import logo from './logo512.svg';
import './App.css';
import SearchPokemon from './components/SearchPokemon';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SearchPokemon />
      </header>
    </div>
  );
}

export default App;

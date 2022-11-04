import logo from './logo.svg';
import './App.css';
import { Book } from './components/Book';

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Book />

      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Example google website
        </a>
        <a
          className="App-link"
          href="https://clubedemilhagem.com/home.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          Example phishing website
        </a>
      </header>
    </div>
  );
}

export default App;

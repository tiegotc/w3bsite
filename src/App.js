import logo from './logo.svg';
import './App.css';
import ReactPlayer from "react-player"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is <code>Tiego's</code> test react app.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    <div className='container'>
    <div className='box'>
      <ReactPlayer className="Youtube"
        url="https://www.youtube.com/watch?v=ug50zmP9I7s"
      />
      </div>
      </div>
    </div>
  );
}

export default App;

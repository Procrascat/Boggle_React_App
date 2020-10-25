import React from 'react';
import findAllSolutions from './solver.js';
import Board from './Board.js';
import GuessInput from './GuessInput.js';
import FoundSolutions from './FoundSolutions.js';
import SummaryResults from './SummaryResults.js';
import ToggleGameState from './ToggleGameState.js';
import logo from './logo.png';
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
      </header>
      <img src={logo}  width="25%" height="25%" class="logo" alt="Bison Boggle Logo" /> 

        <ToggleGameState/>


        <div>
          <Board board />

          <GuessInput />
          <FoundSolutions />
        </div>

        <div>
          <Board board/>
          <SummaryResults />
          <FoundSolutions />
          
        </div>
    </div>
  );
}

export default App;

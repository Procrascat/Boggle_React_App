import React, { useEffect } from 'react';
import findAllSolutions from './solver.js';
import Board from './Board.js';
import GuessInput from './GuessInput.js';
import FoundSolutions from './FoundSolutions.js';
import SummaryResults from './SummaryResults.js';
import ToggleGameState from './ToggleGameState.js';
import logo from './logo.png';
import './App.css';
import React, { useState, useEffect } from 'react';
import {GAME_STATE} from './GameState';
import {RandomGrid} from './randomGen';

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
      
        <ToggleGameState gameState={gameState}
                       setGameState={(state) => setGameState(state)} 
                       setSize={(state) => setSize(state)}
                       setTotalTime={(state) => setTotalTime(state)}/>


        <div>
          <Board board={grid} />

          <GuessInput allSolutions={allSolutions}
                      foundSolutions={foundSolutions}
                      correctAnswerCallback={(answer) =>        
                      correctAnswerFound(answer)}/>
          <FoundSolutions headerText="Solutions you've found" words={foundSolutions}/>
        </div>

        <div>
          <Board board/>
          <SummaryResults words={foundSolutions} totalTime={totalTime}/>
          <FoundSolutions />
          
        </div>
    </div>
  );
}

export default App;

useEffect(() => {
    const wordList = require('./full-wordlist.json');
    let tmpAllSolutions = findAllSolutions(grid, wordList.words);
    setAllSolutions(tmpAllSolutions);
  }, [grid]);

  useEffect(() => {
    if (gameState === GAME_STATE.IN_PROGRESS) {
      setGrid(RandomGrid(size));
      setFoundSolutions([]);
    }
  }, [gameState, size]);

  function correctAnswerFound(answer) {
    console.log("New correct answer:" + answer);
    setFoundSolutions([...foundSolutions, answer]);
  }


function App() {

  const [allSolutions, setAllSolutions] = useState([]);  // solutions from solver
  const [foundSolutions, setFoundSolutions] = useState([]);  // found by user
  const [gameState, setGameState] = useState(GAME_STATE.BEFORE); // Just an enuerator or the three states see below
  const [grid, setGrid] = useState([]);   // the grid
  const [totalTime, setTotalTime] = useState(0);  // total time elapsed
  const [size, setSize] = useState(3);  // selected grid size
  
  return (
     :
     :
    ); 
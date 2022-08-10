import { useEffect, useState } from 'react';
import './App.css';
import MoneyOverview from './Components/MoneyOverview';
import Title from './Components/Title';
import { loadGameState } from './Code/SaveGame';

function App() {
  const [gameState, setGameState] = useState(loadGameState())
  const [time, setTime] = useState(Date.now());

  // TODO: easy way out for perf is to split state into parts. Load and save can still use a parent for a single JSON.
  // Volatile and non-volatile parts?
  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 500);
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  return (
    <div className="App">
      <Title/>
      <MoneyOverview money={gameState.money}/>
    </div>
  );
}

export default App;

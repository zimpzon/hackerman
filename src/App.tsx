import { useEffect, useState } from "react";
import "./App.css";
import MoneyOverview from "./Components/MoneyOverview";
import { loadMoneyState } from "./Code/GameState";
import ManualWorkButton from "./Components/ManualWorkButton";
import HintText from "./Components/HintText";

function App() {
  const [moneyState, setMoneyState] = useState(loadMoneyState());
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="columns">
      <div className="column">
        <MoneyOverview
          amount={moneyState.amount}
          incomePerSec={moneyState.incomePerSec}
        />
        <ManualWorkButton />
        <HintText />
      </div>
      <div className="column">middle</div>
      <div className="column">right</div>
    </div>
  );
}

export default App;

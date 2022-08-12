import "./App.css";
import MoneyOverview from "./Components/MoneyOverview";
import ManualWorkButton from "./Components/ManualWorkButton";
import HintText from "./Components/HintText";
import { onManualWorkClick, startGame, stopGame } from "./Code/bl";
import { useEffect } from "react";
import BuyCpuButton from "./Components/BuyCpuButton";

function App() {
  useEffect(() => {
    startGame();
    return () => {
      stopGame();
    };
  }, []);

  console.log("render app");

  return (
    <div className="columns">
      <div className="column col1">
        <MoneyOverview />
        <ManualWorkButton onClick={onManualWorkClick} />
      </div>

      <div className="column col2">
        <HintText />
        <BuyCpuButton />
      </div>

      <div className="column col3">targets</div>
    </div>
  );
}

export default App;

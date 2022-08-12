import "./App.css";
import MoneyOverview from "./Components/MoneyOverview";
import ManualWorkButton from "./Components/ManualWorkButton";
import HintText from "./Components/HintText";
import { gameState, onManualWorkDone, startGame, stopGame } from "./Code/bl";
import { useEffect, useState } from "react";
import BuyCpuButton from "./Components/BuyCpuButton";
import { calcCpuPrice, onBuyCpu } from "./Code/bl_buying";
import Cpu from "./Components/CPU";

export function App() {
  const [triggerUpdate, setTriggerUpdate] = useState();

  useEffect(() => {
    startGame();
    return () => {
      stopGame();
    };
  }, []);

  console.log("render app");

  const myCpus: JSX.Element[] = [];
  gameState.cpus.forEach((count, hz) => {
    for (let i = 0; i < count; ++i) myCpus.push(<Cpu hz={hz} />);
  });

  return (
    <div className="columns">
      <div className="column col1">
        <MoneyOverview />
        <ManualWorkButton onClick={onManualWorkDone} />
      </div>

      <div className="column col2">
        <HintText />
        <BuyCpuButton
          hz={1}
          price={calcCpuPrice(1, gameState.cpus.get(1) ?? 0)}
          disabled={false}
          onClick={() => onBuyCpu(1)}
        />
        {myCpus}
      </div>

      <div className="column col3">targets</div>
    </div>
  );
}

export default App;

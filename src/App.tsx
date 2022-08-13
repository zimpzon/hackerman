import "./App.css";
import MoneyOverview from "./Components/MoneyOverview";
import ManualWorkButton from "./Components/ManualWorkButton";
import HintText from "./Components/HintText";
import { blTick, gameState, onManualWorkDone, startGame, stopGame, tickMs } from "./Code/bl";
import { useEffect, useState } from "react";
import BuyCpuButton from "./Components/BuyCpuButton";
import { calcCpuPrice, onBuyCpu } from "./Code/bl_buying";
import Cpu from "./Components/CPU";

export function useForceUpdate(): any  {
  const [value, setValue] = useState(0);
  return () => setValue(Date.now())
}

const appTick = () => {
  blTick()
}

export function App() {
  const forceUpdate = useForceUpdate()
  let timerObject: any = undefined

  useEffect(() => {
    startGame(forceUpdate);
    timerObject = setInterval(appTick, tickMs);
    return () => {
      clearInterval(timerObject)
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

import "./App.css";
import MoneyOverview from "./Components/MoneyOverview";
import ManualWorkButton from "./Components/ManualWorkButton";
import HintText from "./Components/HintText";
import BuyCpuButtonsHax from "./Components/BuyCpuButtonsHax";
import CpuListHax from "./Components/CpuListHax";
import bl from "./Code/bl";
import { useEffect, useState } from "react";
import GameState from "./Code/GameState";
import ForceUpdate from "./Code/ForceUpdate";
import TargetList from "./Components/TargetList";

export function App() {
  useEffect(() => {
    bl.instance = new bl();
    return () => {
      bl.instance.stop();
    };
  }, []);

  const [_, setForceUpdate] = useState(0);
  ForceUpdate.setAppTick = setForceUpdate;

  console.log("render app");

  return (
    <div className="columns">
      <div className="column col1">
        {GameState.current.showCpuPane && (
          <>
            <BuyCpuButtonsHax />
            <CpuListHax />
          </>
        )}
      </div>
      <div className="column col2">
        <MoneyOverview />
        <hr className="horzDivider" />
        <ManualWorkButton onClick={bl.onManualWorkDone} />
        <HintText />
      </div>
      <div className="column col3">
        <TargetList />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import MoneyOverview from "./Components/MoneyOverview";
import ManualWorkButton from "./Components/ManualWorkButton";
import HintText from "./Components/HintText";
import BuyCpuButtonsHax from "./Components/BuyCpuButtonsHax";
import CpuListHax from "./Components/CpuListHax";
import bl from "./Code/bl";
import { useEffect } from "react";

export function App() {
  useEffect(() => {
    bl.instance = new bl();
    return () => {
      bl.instance.stop();
    };
  }, []);

  console.log("render app");

  return (
    <div className="columns">
      <div className="column col1">
        <MoneyOverview />
        <ManualWorkButton onClick={bl.onManualWorkDone} />
      </div>

      <div className="column col2">
        <HintText />
        <BuyCpuButtonsHax />
        <CpuListHax />
      </div>

      <div className="column col3">targets</div>
    </div>
  );
}

export default App;

import ManualWorkButton from "./Components/Work/ManualWorkButton";
import bl from "./Code/bl";
import { useEffect, useState } from "react";
import GameState from "./Code/GameState";
import ForceUpdate from "./Code/ForceUpdate";

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
    <div className="mainLayoutGrid">
      <div className="moneyDiv level1Area">
        <div id="moneyText">$0</div>
      </div>
      <div className="nftInfoDiv level1Area"></div>
      <div className="cpuAreaDiv level1Area">
        <div className="manualButtonDiv">
          <ManualWorkButton onClick={bl.onManualWorkDone} />
        </div>
        <div className="cpuGfxDiv">
          <div className="">CPU here</div>
        </div>
        <div className="cpuStatsDiv">
          <div className="">CPU stats here</div>
        </div>
        <div className="cpuProgressBarDiv">
          <div className="">CPU progress bar here</div>
        </div>
        <div className="cpuUpgradesDiv">
          <div className="">CPU upgrades here</div>
        </div>
      </div>
      <div className="nftAreaDiv level1Area"></div>
    </div>
  );
}

export default App;

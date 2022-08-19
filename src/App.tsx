import ManualWorkButton from "./Components/Work/ManualWorkButton";
import bl from "./Code/bl";
import { useEffect, useState } from "react";
import GameState from "./Code/GameState";
import ForceUpdate from "./Code/ForceUpdate";
import CpuUpgradeList from "./Components/CpuUpgradeList";

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
          <hr />
          <div className="">CPU here</div>
          (700 Mhz) (usage: 80%)
        </div>
        <div className="cpuProgressBarDiv">
          <hr />
          <div className="">
            CPU progress bar here
            <div className="cpuProgressWrapper">
              <div className="cpuProgress">
                <span
                  className="cpuProgressFill"
                  style={{ width: "70%" }}
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div className="cpuUpgradesDiv">
          <hr />
          <CpuUpgradeList></CpuUpgradeList>
          <div className="">CPU upgrades here</div>
        </div>
      </div>
      <div className="nftAreaDiv level1Area"></div>
    </div>
  );
}

export default App;

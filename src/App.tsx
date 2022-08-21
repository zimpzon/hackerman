import ManualWorkButton from "./Components/Work/ManualWorkButton";
import bl from "./Code/bl";
import { useEffect, useRef } from "react";
import CpuUpgradeList from "./Components/CpuUpgradeList";
import { useUpgradeCpuButtonsTick } from "./Code/stateHooks";
import Cpu from "./Components/Cpu";
import images from "./assets";

export function App() {
  const tick = useRef<NodeJS.Timer>();
  const { upgradeCpuButtonsTick, setUpgradeCpuButtonsTick } =
    useUpgradeCpuButtonsTick();

  const tickCount = useRef(0);

  useEffect(() => {
    tick.current = setInterval(() => {
      tickCount.current += 1;
      bl.instance.tick();
      setUpgradeCpuButtonsTick(tickCount.current); // out of date, just triggers render all
    }, bl.tickMs);

    bl.instance = new bl();

    return () => {
      clearInterval(tick.current);
    };
  }, []);

  console.log(images)
  
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
          <Cpu />
        </div>
        <div className="cpuUpgradesDiv">
          <hr />
          <CpuUpgradeList></CpuUpgradeList>
        </div>
      </div>
      <div className="nftAreaDiv level1Area">
        {/* <img src={a9} style={{width: "512px", height: "512px"}}></img> */}
      </div>
    </div>
  );
}

export default App;

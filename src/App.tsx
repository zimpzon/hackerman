import ManualWorkButton from "./Components/Work/ManualWorkButton";
import bl from "./Code/bl";
import { useEffect, useRef } from "react";
import CpuUpgradeList from "./Components/CpuUpgradeList";
import { useUpgradeCpuButtonsTick } from "./Code/stateHooks";
import GameState from "./Code/GameState";
import Terminal from "./Components/Terminal";
import Coins from "./Components/Coins";
import CpuTabs from "./Components/CpuTabs";

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
      console.log("Stopping timer");
      clearInterval(tick.current);
    };
  }, []);

  return (
    <div className="mainLayoutGrid">
      <div className="level1Area cell0_0">
        <div id="moneyText">0</div>
        <div id="incomeText">Per second: $0</div>
      </div>
      <div className="level1Area">
        <Coins />
      </div>
      <div className="cpuAreaDiv level1Area">
        <div className="manualButtonDiv">
          <ManualWorkButton onClick={bl.onManualWorkDone} />
        </div>
        <div className="level1Area cpuUpgradesDiv">
          <CpuTabs>
            <CpuUpgradeList />
          </CpuTabs>
          <button onClick={() => GameState.save()}>Save</button>
          <button onClick={() => GameState.load()}>Load</button>
          <button onClick={() => GameState.reset()}>Reset</button>
          <div>
            <canvas id="incomeChart" width="800" height="1000"></canvas>
          </div>
        </div>
      </div>
      <div className="nftAreaDiv level1Area">
        <div>Colorful (0 / x) +10% income</div>
        <div>Magical Places (0 / x) -10% cpu prices</div>
        <div>Creatures (0 / x) -10% on all upgrade prices</div>
        <div>Friendly (0 / x) +10% faster Buttcoins</div>
        <div>Scary (0 / x) +4 hours of offline income</div>
        <div>Epic (0 / x) +10% more of all owned cpus</div>
        <div className="terminalFooter">
          <Terminal />
        </div>
      </div>
    </div>
  );
}

export default App;

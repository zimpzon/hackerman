import ManualWorkButton from "./Components/Work/ManualWorkButton";
import bl from "./Code/bl";
import { useEffect, useRef } from "react";
import CpuUpgradeList from "./Components/CpuUpgradeList";
import { useUpgradeCpuButtonsTick } from "./Code/stateHooks";
import Cpu from "./Components/Cpu";
import images from "./assets";
import GameState from "./Code/GameState";

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

  return (
    <div className="mainLayoutGrid">
      <div className="moneyDiv level1Area">
        <button onClick={() => GameState.save()}>Save</button>
        <button onClick={() => GameState.load()}>Load</button>
        <button onClick={() => GameState.reset()}>Reset</button>
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
        <div className="level1Area">
          <h3>Candidates / Building</h3>
          <>
            {Array.from(images)
              .slice(0, 5)
              .map(([k, v]) => (
                <>
                  <img
                    alt="abc"
                    src={images.get(k)}
                    style={{
                      filter: "grayscale(1) contrast(0.015)",
                      width: "128px",
                      height: "128px",
                      margin: "3px",
                      border: "3px outset grey",
                    }}
                  />
                </>
              ))}
          </>
        </div>
        <div className="level1Area">
          <h3>Your collection</h3>
          <>
            <div className="verticalScrollArea">
              {Array.from(images).map(([k, v]) => (
                <>
                  <img
                    alt="abc"
                    src={images.get(k)}
                    style={{
                      width: "128px",
                      height: "128px",
                      margin: "3px",
                      border: "3px outset grey",
                      filter: "grayscale(0) contrast(0.01)",
                    }}
                  />
                </>
              ))}
            </div>
          </>
        </div>
      </div>
    </div>
  );
}

export default App;

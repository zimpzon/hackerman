import * as PIXI from "pixi.js";
import ManualWorkButton from "./Components/Work/ManualWorkButton";
import bl from "./Code/bl";
import { useEffect, useRef, useState } from "react";
import CpuUpgradeList from "./Components/CpuUpgradeList";
import { useUpgradeCpuButtonsTick } from "./Code/stateHooks";
import Cpu from "./Components/Cpu";
import images, { icons } from "./assets";
import GameState from "./Code/GameState";
import { usePixi } from "./Code/pixiHook";
import NftList from "./Components/NftList";
import { formatMoney } from "./Code/format";

export function App() {
  const pixies = usePixi();
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

  function setPixiImage(url: string) {
    if (!pixies) throw Error("missing pixies");
    console.log(formatMoney(1000 * 1000));

    PIXI.Texture.fromURL(url).then((tex) => {
      pixies.imageEffectSprite.texture = tex;
      pixies.app.renderer.render(pixies.app.stage);
    });
  }

  return (
    <div className="mainLayoutGrid">
      <div className="moneyDiv level1Area">
        <div id="moneyText">0</div>
        <div id="incomeText">Per second: $0</div>
      </div>
      <div className="nftInfoDiv level1Area">
        <div style={{ float: "right" }}>
          <button onClick={() => GameState.save()}>Save</button>
          <button onClick={() => GameState.load()}>Load</button>
          <button onClick={() => GameState.reset()}>Reset</button>
        </div>
      </div>
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
            <canvas
              style={{ width: "200px", height: "200px" }}
              id="pixiCanvas"
            />
          </>
        </div>
        <div className="level1Area">
          <h3>
            Your collection ({GameState.current.ownedNfts.length} /{" "}
            {images.size})
          </h3>
          <>
            <div className="verticalScrollArea">
              <NftList
                ownedNfts={GameState.current.ownedNfts}
                onClick={(key) => {
                  GameState.current.ownedNfts.push(key);
                  setPixiImage(images.get(key));
                }}
              />
            </div>
          </>
        </div>
      </div>
    </div>
  );
}

export default App;

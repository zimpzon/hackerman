import { useState } from "react";
import ForceUpdate from "../../Code/ForceUpdate";
import Shop from "../../Code/Shop";

function BuyCpuHax() {
  const [_, setForceUpdate] = useState(0);
  ForceUpdate.setBuyCpuButtonsTick = setForceUpdate;

  return (
    <>
      <button id="buyCpuButton" disabled={!Shop.canAffordCpu()} onClick={() => Shop.buyCpu()}>
        Buy CPU
        <div id="buyCpuButtonPrice">${Shop.cpuPrice()}</div>
      </button>
      <div style={{display: "flex", whiteSpace: "nowrap"}}>
      <button className="upgradeCpuButton" disabled={false}>
        4 X <span className="textRarityCommon textRarity">0.1 Ghz</span> <br/>into<br/> 1 X <span className="textRarityUncommon textRarity">0.8 Ghz</span><hr/>$800
      </button>
      <button className="upgradeCpuButton" disabled={true}>
        4 X <span className="textRarityUncommon textRarity">0.8 Ghz</span> <br/>into<br/> 1 X <span className="textRarityRare textRarity">6.4 Ghz</span><hr/>$800
      </button>
      <button className="upgradeCpuButton" disabled={false}>
        4 X <span className="textRarityRare textRarity">6.4 Ghz</span> <br/>into<br/> 1 X <span className="textRarityEpic textRarity">51.2 Ghz</span><hr/>$800
      </button>
      <button className="upgradeCpuButton" disabled={false}>
        4 X <span className="textRarityEpic textRarity">51.2 Ghz</span> <br/>into<br/> 1 X <span className="textRarityLegendary textRarity">409.6 Ghz</span><hr/>$800
      </button>
      </div>
      Combine two identical CPUs by dragging
    </>
  );
}

export default BuyCpuHax;

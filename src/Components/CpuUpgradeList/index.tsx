import { useState } from "react";
import ForceUpdate from "../../Code/ForceUpdate";
import GameData from "../../Code/GameData";
import GameState from "../../Code/GameState";
import Shop from "../../Code/Shop";
import "./index.css";

function CpuUpgradeList(): JSX.Element {
  const [forceUpdate, setForceUpdate] = useState();
  ForceUpdate.setCpuUpgradesTick = setForceUpdate;

  console.log('RENDER CPU X')

  const buttons = [];
  for (const upgDef of GameData.possibleCpuUpgrades) {
    const userUpg = GameState.current.cpuUpgrades.get(upgDef.id);
    if (!userUpg) continue;
    console.log(upgDef)

    const btn = (<>
    <a className="btn" key={upgDef.id}>
     
      {/* {upgDef.name}
      <pre key={upgDef.id}>
      {upgDef.mhz} Mhz
      {Shop.cpuPrice(upgDef.basePrice, userUpg.ownedCount)}
      </pre> */}
    </a>
    </>);

    buttons.push(btn);
  }

  return <>{buttons}</>;
}

export default CpuUpgradeList;

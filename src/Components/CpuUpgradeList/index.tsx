import { useState } from "react";
import ForceUpdate from "../../Code/ForceUpdate";
import GameData from "../../Code/GameData";
import GameState from "../../Code/GameState";
import "./index.css";

function CpuUpgradeList(): JSX.Element {
  const [forceUpdate, setForceUpdate] = useState();
  ForceUpdate.setCpuUpgradesTick = setForceUpdate;

  const buttons = [];
  for (const upgDef of GameData.possibleCpuUpgrades) {
    const userUpg = GameState.current.cpuUpgrades.get(upgDef.id);
    if (!userUpg) continue;

    const btn = <a className="btn">{upgDef.name}</a>;
    buttons.push(btn);
  }

  return <>{buttons}</>;
}

export default CpuUpgradeList;

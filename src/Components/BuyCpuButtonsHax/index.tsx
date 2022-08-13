import { useState } from "react";
import ForceUpdate from "../../Code/ForceUpdate";
import GameState from "../../Code/GameState";
import Shop from "../../Code/Shop";
import BuyCpuButton from "../BuyCpuButton";

function BuyCpuHax() {
  const [_, setForceUpdate] = useState(0);
  ForceUpdate.setBuyCpuButtonsTick = setForceUpdate;

  return (
    <>
      <BuyCpuButton
        mhz={GameState.current.cpuMzh}
        price={Shop.cpuPrice()}
        disabled={!Shop.canAffordCpu()}
        onClick={() => Shop.buyCpu()}
      />
    </>
  );
}

export default BuyCpuHax;

import { useState } from "react";
import ForceUpdate from "../../Code/ForceUpdate";
import Shop from "../../Code/Shop";
import BuyCpuButton from "../BuyCpuButton";

function BuyCpuHax() {
  const [_, setForceUpdate] = useState(0);
  ForceUpdate.setBuyCpuButtonsTick = setForceUpdate;

  const hz = 1;

  return (
    <>
      <BuyCpuButton
        hz={1}
        price={Shop.cpuPrice(hz)}
        disabled={!Shop.canAffordCpu(hz)}
        onClick={() => Shop.buyCpu(hz)}
      />
    </>
  );
}

export default BuyCpuHax;

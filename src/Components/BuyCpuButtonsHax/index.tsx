import bl from "../../Code/bl";
import Shop from "../../Code/Shop";
import BuyCpuButton from "../BuyCpuButton";

function BuyCpuHax() {
  const hz = 1;

  return (
    <>
      <BuyCpuButton
        hz={1}
        price={Shop.calcCpuPrice(1, bl.instance.getCpuOwnedCount(hz))}
        disabled={Shop.canAffordCpu(hz)}
        onClick={() => Shop.buyCpu(hz)}
      />
    </>
  );
}

export default BuyCpuHax;

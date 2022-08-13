import { formatHz } from "../../Code/format";
import GameState from "../../Code/GameState";
import Shop from "../../Code/Shop";
import Cpu from "../CPU";

function CpuListHax() {
  const myCpus: JSX.Element[] = [];
  GameState.current.cpus.forEach((count, hz) => {
    for (let i = 0; i < count; ++i) myCpus.push(<Cpu hz={hz} />);
  });

  const hz: number = 1;

  return <>{myCpus}</>;
}

export default CpuListHax;

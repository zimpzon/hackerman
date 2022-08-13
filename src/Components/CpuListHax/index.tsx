import { useState } from "react";
import ForceUpdate from "../../Code/ForceUpdate";
import GameState from "../../Code/GameState";
import Cpu from "../CPU";

function CpuListHax() {
  const [_, setForceUpdate] = useState(0);
  ForceUpdate.setShowCpuListTick = setForceUpdate;

  console.log("render cpu list");

  const myCpus: JSX.Element[] = [];
  GameState.current.cpus.forEach((count, hz) => {
    for (let i = 0; i < count; ++i) myCpus.push(<Cpu hz={hz} key={i} />);
  });

  return <>{myCpus}</>;
}

export default CpuListHax;

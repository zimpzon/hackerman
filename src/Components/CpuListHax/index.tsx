import { useState } from "react";
import ForceUpdate from "../../Code/ForceUpdate";
import GameState from "../../Code/GameState";
import Cpu from "../CPU";

function CpuListHax() {
  const [_, setForceUpdate] = useState(0);
  ForceUpdate.setShowCpuListTick = setForceUpdate;

  console.log("render cpu list");

  const myCpus: JSX.Element[] = [];
  for (let i = 0; i < GameState.current.cpuCount; ++i)
    myCpus.push(<Cpu mhz={GameState.current.cpuMzh} key={i} />);

  return <><div id="cpuList">{myCpus}</div></>;
}

export default CpuListHax;

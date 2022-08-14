import { useState } from "react";
import ForceUpdate from "../../Code/ForceUpdate";
import GameState from "../../Code/GameState";
import Target from "../Target";

function TargetList() {
  const [_, setForceUpdate] = useState(0);
  ForceUpdate.setShowCpuListTick = setForceUpdate;

  console.log("render hacking target list");

  return (
    <>
      <div className="targetList">
        {GameState.current.targetBulliesCount > 0 && (
          <Target
            name={"School bullies"}
            count={GameState.current.targetBulliesCount}
            price={0}
          />
        )}
      </div>
    </>
  );
}

export default TargetList;

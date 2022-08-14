import { useState } from "react";
import ForceUpdate from "../../Code/ForceUpdate";
import GameState from "../../Code/GameState";
import Target from "../Target";

function TargetList() {
  const [_, setForceUpdate] = useState(0);
  ForceUpdate.setShowTargetListTick = setForceUpdate;

  console.log("render hacking target list");

  const showTargetBullies = true; //GameState.current.targetBulliesCount > 0;

  return (
    <>
      <div className="targetList">
        {showTargetBullies && (
          <Target
            name={"Target One"}
            count={GameState.current.targetBulliesCount}
            price={0}
          />
        )}
      </div>
    </>
  );
}

export default TargetList;

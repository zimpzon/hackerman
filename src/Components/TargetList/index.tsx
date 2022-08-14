import { useState } from "react";
import ForceUpdate from "../../Code/ForceUpdate";
import GameState from "../../Code/GameState";
import Target from "../Target";

function TargetList() {
  const [_, setForceUpdate] = useState(0);
  ForceUpdate.setShowTargetListTick = setForceUpdate;

  console.log("render hacking target list");

  const showtargetOne = true; //GameState.current.targetOneCount > 0;

  return (
    <>
      <div className="targetList">
        {showtargetOne && (
          <Target
            name={"Target One"}
            count={GameState.current.targetOneCount}
            price={0}
          />
        )}
        {showtargetOne && (
          <Target
            name={"Target Two"}
            count={GameState.current.targetOneCount}
            price={0}
          />
        )}
        {showtargetOne && (
          <Target
            name={"Target Three"}
            count={GameState.current.targetOneCount}
            price={0}
          />
        )}
      </div>
    </>
  );
}

export default TargetList;

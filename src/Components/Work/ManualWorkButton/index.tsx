import React, { useRef, useState } from "react";
import { formatGhz } from "../../../Code/format";
import GameState from "../../../Code/GameState";
import CpuLights from "../../CpuLights";
import "./index.css";

interface ManualWorkButtonProps {
  onClick: (event: React.MouseEvent) => void;
}

function ManualWorkButton({ onClick }: ManualWorkButtonProps): JSX.Element {
  const [invitePlayer, setInvitePlayer] = useState(0);
  const bounceTarget = useRef<any>();

  const animPushDown: Keyframe[] = [
    { transform: "scale(1)" },
    { transform: "scale(0.95)" },
    { transform: "scale(1)" },
  ];

  const animTiming: KeyframeAnimationOptions = {
    duration: 100,
    iterations: 1,
    easing: "ease-out",
  };

  const click = (e: React.MouseEvent) => {
    const element = e.currentTarget as HTMLElement;
    element.animate(animPushDown, animTiming);
    onClick(e);
  };

  if (
    GameState.current.maxMoney < 10 &&
    Date.now() > invitePlayer &&
    bounceTarget.current
  ) {
    bounceTarget.current.animate(animPushDown, animTiming);
    setInvitePlayer(Date.now() + 2000);
  }

  return (
    <>
      <div className="cpuLayout">
        <div className="cpuLabel">{formatGhz(GameState.totalGhz)}</div>
        <div id="manualWorkButton" ref={bounceTarget} onClick={click}>
          <CpuLights />
        </div>
        <div className="cpuLabel">Cores: {GameState.cpuCount}</div>
      </div>
    </>
  );
}

export default ManualWorkButton;

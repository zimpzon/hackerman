import React, { useState } from "react";
import { icons } from "../../../assets";
import bl from "../../../Code/bl";

interface ManualWorkButtonProps {
  onClick: (event: React.MouseEvent) => void;
}

function ManualWorkButton({ onClick }: ManualWorkButtonProps): JSX.Element {
  const [fill, setFill] = useState(0);

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
    let newFill = fill + 1;
    if (newFill > 100) {
      newFill -= 100;
    }
    onClick(e);
    setFill(newFill);
  };

  return (
    <>
      <div
        id="manualWorkButton"
        style={{
          backgroundImage: "url(" + icons.get("black") + ")",
          backgroundSize: `100% ${100 - fill}%`
        }}
        onClick={click}
      />
    </>
  );
}

export default ManualWorkButton;

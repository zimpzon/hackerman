import React from "react";
import { icons } from "../../../assets";

interface ManualWorkButtonProps {
  onClick: (event: React.MouseEvent) => void;
}

function ManualWorkButton({ onClick }: ManualWorkButtonProps): JSX.Element {
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

  return (
    <>
      <div
        id="manualWorkButton"
        style={{ backgroundImage: "url(" + icons.get("question-mark") + ")" }}
        onClick={click}
      ></div>
    </>
  );
}

export default ManualWorkButton;

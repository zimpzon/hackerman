import React from "react";
import GameState from "../../Code/GameState";

interface ManualWorkButtonProps {
  onClick: (event: React.MouseEvent) => void;
}

function ManualWorkButton({ onClick }: ManualWorkButtonProps): JSX.Element {
  return (
    <>
      <button id="manualWorkButton" onClick={onClick}>
        Boring work
        <div id="manualWorkIncome"></div>
      </button>
    </>
  );
}

export default ManualWorkButton;

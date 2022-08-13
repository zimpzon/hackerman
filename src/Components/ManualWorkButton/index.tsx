import GameState from "../../Code/GameState";

interface ManualWorkButtonProps {
  onClick: () => void;
}

function ManualWorkButton({ onClick }: ManualWorkButtonProps): JSX.Element {
  return (
    <>
      <button id="manualWorkButton" onClick={onClick}>
        Boring work
        <div id="manualWorkIncome">
          per click: ${GameState.current.manualWorkValue}
        </div>
      </button>
    </>
  );
}

export default ManualWorkButton;

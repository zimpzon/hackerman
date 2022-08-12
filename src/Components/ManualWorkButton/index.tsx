interface ManualWorkButtonProps {
  onClick: () => void;
}

function ManualWorkButton({ onClick }: ManualWorkButtonProps): JSX.Element {
  return (
    <>
      <button id="manualWorkButton" onClick={onClick}>
        Boring work
        <div id="manualWorkIncome">$0.1</div>
      </button>
    </>
  );
}

export default ManualWorkButton;

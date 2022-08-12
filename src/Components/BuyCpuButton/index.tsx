import { formatHz } from "../../Code/format";

interface BuyCpuButtonProps {
  disabled: boolean;
  hz: number;
  price: number;
  onClick: () => void;
}

function BuyCpuButton({ disabled, hz, price, onClick }: BuyCpuButtonProps) {
  return (
    <>
      <button id="buyCpuButton" disabled={disabled} onClick={onClick}>
        {formatHz(hz)} CPU
        <div id="buyCpuButtonPrice">${price}</div>
      </button>
    </>
  );
}

export default BuyCpuButton;

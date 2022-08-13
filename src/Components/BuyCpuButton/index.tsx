import { formatMhz } from "../../Code/format";

interface BuyCpuButtonProps {
  disabled: boolean;
  mhz: number;
  price: number;
  onClick: () => void;
}

function BuyCpuButton({ disabled, mhz, price, onClick }: BuyCpuButtonProps) {
  return (
    <>
      <button id="buyCpuButton" disabled={disabled} onClick={onClick}>
        {formatMhz(mhz)} CPU
        <div id="buyCpuButtonPrice">${price}</div>
      </button>
    </>
  );
}

export default BuyCpuButton;

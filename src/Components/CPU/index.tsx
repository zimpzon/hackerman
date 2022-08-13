import { formatMhz } from "../../Code/format";

interface CpuProps {
  mhz: number;
}

function Cpu({ mhz }: CpuProps) {
  return (
    <>
      <div className="cpu">I own: {formatMhz(mhz)}</div>
    </>
  );
}

export default Cpu;

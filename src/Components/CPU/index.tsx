import { formatHz } from "../../Code/format";

interface CpuProps {
  hz: number;
}

function Cpu({ hz }: CpuProps) {
  return (
    <>
      <div id="moneyOverview">I own: {formatHz(hz)}</div>
    </>
  );
}

export default Cpu;

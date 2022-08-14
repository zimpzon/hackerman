interface CpuProps {
  mhz: number;
}

function Cpu({ mhz }: CpuProps) {
  return (
    <>
      <div className="cpu">
        <div>{mhz}</div>
        <div>Mhz</div>
      </div>
    </>
  );
}

export default Cpu;

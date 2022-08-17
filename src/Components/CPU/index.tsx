interface CpuProps {
  mhz: number;
}

function Cpu({ mhz }: CpuProps) {
  return (
    <>
      <div className="cpu">
        <div>{mhz / 1000} Ghz</div>
      </div>
    </>
  );
}

export default Cpu;

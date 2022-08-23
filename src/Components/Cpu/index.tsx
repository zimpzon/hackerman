import GameState from "../../Code/GameState";
import "./index.css";

function Cpu(): JSX.Element {
  return (
    <>
      <div className="wrapper">
        <div>Your super computer</div>
        <div>{GameState.totalMhz} Mhz</div>
        <div>Cores: {GameState.cpuCount}</div>
        <div>Income per second: ${GameState.incomePerSec.toFixed(1)}</div>
        <div>
          Image building progress: {GameState.current.cpuProgress.toFixed(1)}%
        </div>
      </div>
    </>
  );
}

{
  /* <div className="cpuProgressWrapper">
<div className="cpuProgress">
  <span
    className="cpuProgressFill"
    style={{ width: "70%" }}
  ></span>
</div>
</div> */
}

export default Cpu;
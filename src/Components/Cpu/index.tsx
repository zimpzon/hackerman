import GameState from "../../Code/GameState";
import "./index.css";

function Cpu(): JSX.Element {
  return (
    <>
      <div>Your super computer</div>
      <div>CPUs: {GameState.cpuCount}</div>
      <div>Total power: {GameState.totalMhz} Mhz</div>
      <div>Income per second: ${GameState.incomePerSec.toFixed(1)}</div>
      <div>Hacking progress: {GameState.current.cpuProgress.toFixed(1)}%</div>
    </>
  );
}

export default Cpu;

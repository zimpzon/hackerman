import { useEffect } from "react";
import bl from "../../Code/bl";
import GameState from "../../Code/GameState";
import "./index.css";

function Terminal(): JSX.Element {
  useEffect(() => {
    ($("#terminal") as any).terminal(
      {
        $: function (amount: number) {
          GameState.current.money += amount;
        },
        cpu: function (amount: number) {
          GameState.current.cpuUpgradeCounts[0] =
            (GameState.current.cpuUpgradeCounts[0] ?? 0) + amount;
        },
      },
      {
        greetings: "Welcome back CyberPug",
        onBlur: function (t: any) {
          return false;
        },
      }
    );
  });

  return (
    <>
      <div className="tv">
        <div id="terminal"></div>
      </div>
    </>
  );
}

export default Terminal;

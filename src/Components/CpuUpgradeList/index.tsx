import { rgb2hex } from "@pixi/utils";
import images, { icons } from "../../assets";
import { formatGhz, formatMoney } from "../../Code/format";
import GameData, { cpuUpgradeDefinition } from "../../Code/GameData";
import GameState from "../../Code/GameState";
import Shop from "../../Code/Shop";
import "./index.css";

function CpuUpgradeList(): JSX.Element {
  const onBuyClick = (item: cpuUpgradeDefinition) => {
    Shop.buyCpu(item);
  };

  // TODO: make sure there is always a dark one to go for.
  const buttons = [];
  for (const upgDef of GameData.possibleCpuUpgrades) {
    const ownedCount = GameState.current.cpuUpgradeCounts[upgDef.id - 1] ?? 0;
    const showDark =
      GameState.current.maxMoney >= upgDef.basePrice * 0.5 || upgDef.id <= 2;
    const showFully = GameState.current.maxMoney >= upgDef.basePrice;
    if (!showDark && !showFully) continue;
    const price = Shop.cpuPrice(upgDef.basePrice, ownedCount);
    const canAfford = GameState.current.money >= price;
    const priceClass = canAfford ? "canAfford" : "cannotAfford";
    const name = showFully ? upgDef.name : "???";
    const displayMhz = showFully ? formatGhz(upgDef.ghz) : "?";
    const incomePerDollar = upgDef.ghz / price;

    // style={{ backgroundImage: "url(" + icons.get(upgDef.image) + ")" }}

    let secondsLeft =
      (price - GameState.current.money) / GameState.incomePerSec + 1; // +1 to avoid showing 00:00:00 for 1 second.

    let seconds = Math.floor(secondsLeft % 60)
      .toString()
      .padStart(2, "0");

    let minutes = (Math.floor(secondsLeft / 60) % 60)
      .toString()
      .padStart(2, "0");

    let hours = Math.floor(secondsLeft / 3600)
      .toString()
      .padStart(2, "0");

    let displayTime =
      GameState.incomePerSec > 0 ? `${hours}:${minutes}:${seconds}` : "?";

    if (secondsLeft < 1) {
      displayTime = "-";
    }

    const pct = Math.min(1, GameState.current.money / price);

    const r = 255 - 255 * pct;
    const g = 255 * pct;

    const btn = (
      <>
        <span key={upgDef.id}>
          <a
            className="cpuUpgradeBtn"
            key={upgDef.id}
            onClick={canAfford ? () => onBuyClick(upgDef) : undefined}
          >
            <div className="upgradeTextArea">
              <div className="upgradeName">
                {name} ({ownedCount})
              </div>
              <div style={{ fontSize: "xx-small" }}>{displayMhz}</div>
              <div>{displayTime}</div>
              <div className="cpuUpgradeBtnPctOuter">
                <div
                  className="cpuUpgradeBtnPctInner"
                  style={{
                    width: `${pct * 100}%`,
                    backgroundColor: `rgb(${r}, ${g}, 1)`,
                  }}
                ></div>
              </div>{" "}
              <div className={`upgradePrice ${priceClass}`}>
                ${formatMoney(price)}
                {/* ${price} (${(incomePerDollar * 60).toFixed(5)}/min) */}
              </div>
            </div>{" "}
          </a>
        </span>{" "}
      </>
    );

    buttons.push(btn);
  }

  return (
    <>
      <div className="">{buttons}</div>
    </>
  );
}

export default CpuUpgradeList;

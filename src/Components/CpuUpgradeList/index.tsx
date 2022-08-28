import images, { icons } from "../../assets";
import { formatMoney } from "../../Code/format";
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
    const displayMhz = showFully ? upgDef.mhz : "?";
    const incomePerDollar = (upgDef.mhz * 0.1) / price;

    // style={{ backgroundImage: "url(" + icons.get(upgDef.image) + ")" }}

    const btn = (
      <>
        <span key={upgDef.id}>
          <a
            className="cpuUpgradeBtn"
            key={upgDef.id}
            onClick={canAfford ? () => onBuyClick(upgDef) : undefined}
          >
            <div>
              {name} ({ownedCount})
            </div>
            <div>{displayMhz} Mhz</div>
            <div className={priceClass}>
              ${formatMoney(price)}
              {/* ${price} (${(incomePerDollar * 60).toFixed(5)}/min) */}
            </div>
          </a>
        </span>{" "}
      </>
    );

    buttons.push(btn);
  }

  return (
    <>
      <div className="verticalScrollArea">{buttons}</div>
    </>
  );
}

export default CpuUpgradeList;

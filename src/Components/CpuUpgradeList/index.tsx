import GameData, { cpuUpgradeDefinition } from "../../Code/GameData";
import GameState from "../../Code/GameState";
import Shop from "../../Code/Shop";
import "./index.css";

function CpuUpgradeList(): JSX.Element {
  const onBuyClick = (item: cpuUpgradeDefinition) => {
    Shop.buyCpu(item);
  };

  const buttons = [];
  for (const upgDef of GameData.possibleCpuUpgrades) {
    const ownedCount = GameState.current.cpuUpgradeCounts.get(upgDef.id) ?? 0;
    const showDark = GameState.current.maxMoney >= upgDef.showDarkAt;
    const showFully = GameState.current.maxMoney >= upgDef.fullyShowAt;
    if (!showDark && !showFully) continue;
    const price = Shop.cpuPrice(upgDef.basePrice, ownedCount);
    const canAfford = GameState.current.money >= price;
    const priceClass = canAfford ? "canAfford" : "cannotAfford";

    const btn = (
      <>
        <a
          className="btn"
          key={upgDef.id}
          onClick={canAfford ? () => onBuyClick(upgDef) : undefined}
        >
          <div>
            {upgDef.name} ({ownedCount})
          </div>
          <div>{upgDef.mhz} Mhz</div>
          <div className={priceClass}>${price}</div>
        </a>
      </>
    );

    buttons.push(btn);
  }

  return <>{buttons}</>;
}

export default CpuUpgradeList;

import GameData from "./GameData";

type gameStateType = {
  money: number;
  maxMoney: number;
  manualWorkValue: number;
  cpuUpgradeCounts: number[];
  cpuProgress: number;
  ownedNfts: string[];
  coinProgress: number;
  totalCoins: number;
};

class GameState {
  private static storageKey: string = "save-game";

  public static current: gameStateType = {
    money: 0,
    maxMoney: 0,
    manualWorkValue: GameData.manualWorkBasePrice,
    cpuUpgradeCounts: [],
    cpuProgress: 0,
    ownedNfts: [],
    coinProgress: 0,
    totalCoins: 0
  };

  public static cpuCount: number = 0;
  public static totalGhz: number = 0;
  public static incomePerSec: number = 0;

  public static load() {
    let json =
      localStorage.getItem(GameState.storageKey) ||
      JSON.stringify(this.current);

    GameState.current = JSON.parse(json) as gameStateType;

    // Set lenght to dynamically adjust to more upgrades implemented.
    GameState.current.cpuUpgradeCounts.length =
      GameData.possibleCpuUpgrades.length;
  }

  public static save() {
    const json = JSON.stringify(GameState.current);
    localStorage.setItem(GameState.storageKey, json);
  }

  public static reset() {
    localStorage.removeItem(GameState.storageKey);
    this.load();
  }
}

export default GameState;

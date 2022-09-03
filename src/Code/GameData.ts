class GameData {
  public static manualWorkBasePrice: number = 1;
  public static cpuPriceExp: number = 1.15;

  public static possibleCpuUpgrades: cpuUpgradeDefinition[] = [
    { id: 1, name: "Abacus", ghz: 0.1, basePrice: 10, image: "pixelize-test" },
    {
      id: 2,
      name: "80s computer",
      ghz: 1,
      basePrice: 100,
      image: "old-computer",
    },
    {
      id: 3,
      name: "Junkyard scrap",
      ghz: 66,
      basePrice: 1500,
      image: "scrap-yard",
    },
    {
      id: 4,
      name: "Used phone",
      ghz: 433,
      basePrice: 1000 * 20,
      image: "mobile-phone",
    },
    {
      id: 5,
      name: "Black market",
      ghz: 2100,
      basePrice: 1000 * 1000,
      image: "black-market",
    },
    {
      id: 6,
      name: "Area 52",
      ghz: 8000,
      basePrice: 1000 * 1000 * 100,
      image: "abacus",
    },
    {
      id: 7,
      name: "Mars",
      ghz: 20000,
      basePrice: 1000 * 1000 * 1000 * 10,
      image: "abacus",
    },
    {
      id: 8,
      name: "Kuiper Belt",
      ghz: 50000,
      basePrice: 1000 * 1000 * 1000 * 1000 * 1000,
      image: "abacus",
    },
    {
      id: 9,
      name: "Number 9",
      ghz: 50000,
      basePrice: 1000 * 1000 * 1000 * 1000 * 1000,
      image: "abacus",
    },
    {
      id: 10,
      name: "Number 10",
      ghz: 50000,
      basePrice: 1000 * 1000 * 1000 * 1000 * 1000,
      image: "abacus",
    },
    {
      id: 11,
      name: "Number 11",
      ghz: 50000,
      basePrice: 1000 * 1000 * 1000 * 1000 * 1000,
      image: "abacus",
    },
    {
      id: 12,
      name: "Number 12",
      ghz: 50000,
      basePrice: 1000 * 1000 * 1000 * 1000 * 1000,
      image: "abacus",
    },
  ];
}

export type cpuUpgradeDefinition = {
  id: number;
  name: string;
  ghz: number;
  basePrice: number;
  image: string;
};

export default GameData;

/*
Upgrades
100 Click X 2
10.000 Click X 10
100.000 Click +1% income
1m Click +1% income
10m Click +1% income

Income +1%
Hacking +10% success rate
Hacking income x2, effort x1.5
Double income from X

*/

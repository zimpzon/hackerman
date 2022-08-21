class GameData {
    public static manualWorkBasePrice: number = 1
    public static cpuPriceExp: number = 1.15

    public static possibleCpuUpgrades: cpuUpgradeDefinition[] = [
        { id: 1, name: 'Abacus', mhz: 1, basePrice: 10 },
        { id: 2, name: '80s computer', mhz: 12, basePrice: 100 },
        { id: 3, name: 'Junkyard scrap', mhz: 66, basePrice: 1500 },
        { id: 4, name: 'xxxx', mhz: 466, basePrice: 20000 },
    ];
}

export type cpuUpgradeDefinition = {
    id: number
    name: string
    mhz: number
    basePrice: number
}

export default GameData

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
class GameData {
    public static manualWorkBasePrice: number = 1
    public static cpuPriceExp: number = 1.15

    public static possibleCpuUpgrades: cpuUpgradeDefinition[] = [
        { id: 1, name: 'Abacus', mhz: 1, basePrice: 10 },
        { id: 2, name: '90s computer', mhz: 33, basePrice: 100 },
        { id: 3, name: 'Junkyard scrap', mhz: 400, basePrice: 1000 },
    ];
}

export type cpuUpgradeDefinition = {
    id: number
    name: string
    mhz: number
    basePrice: number
}

export default GameData

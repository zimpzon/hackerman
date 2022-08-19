class GameData {
    public static manualWorkBasePrice: number = 1
    public static cpuPriceExp: number = 1.15

    public static possibleCpuUpgrades: cpuUpgradeDefinition[] = [
        { id: 1, name: 'Abacus', mhz: 1, basePrice: 10, showDarkAt: 0, fullyShowAt: 0 },
        { id: 2, name: '90s computer', mhz: 33, basePrice: 100, showDarkAt: 5, fullyShowAt: 10 },
        { id: 3, name: 'Junkyard scrap', mhz: 400, basePrice: 10, showDarkAt: 15, fullyShowAt: 200 },
    ];
}

export type cpuUpgradeDefinition = {
    id: number
    name: string
    mhz: number
    basePrice: number
    showDarkAt: number
    fullyShowAt: number
}

export default GameData

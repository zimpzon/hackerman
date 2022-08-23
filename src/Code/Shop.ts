import bl from "./bl";
import GameData, { cpuUpgradeDefinition } from "./GameData"
import GameState from "./GameState"

class Shop {
    static assertCanAfford(price: number, what: string) {
        if (price > GameState.current.money)
            throw new Error(`cannot afford ${what}, price: ${price}, has: ${GameState.current.money} `)
    }
    
    public static cpuPrice(basePrice: number, ownedCount: number) {
        return Math.round(basePrice * Math.pow(GameData.cpuPriceExp, ownedCount))
    }

    public static buyCpu(item: cpuUpgradeDefinition) {
        const ownedCount = GameState.current.cpuUpgradeCounts[item.id -1] ?? 0;
        const price = this.cpuPrice(item.basePrice, ownedCount)
        Shop.assertCanAfford(price, item.name)
        
        GameState.current.cpuUpgradeCounts[item.id - 1] = ownedCount + 1
        GameState.current.money -= price
        
        bl.instance.updateCounts()
    }
}

export default Shop

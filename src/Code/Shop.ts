import bl from "./bl"
import ForceUpdate from "./ForceUpdate"
import GameData from "./GameData"
import GameState, { knownCpuUpgrade } from "./GameState"

class Shop {
    static assertCanAfford(price: number, what: string) {
        if (price > GameState.current.money)
            throw new Error(`cannot afford ${what}, price: ${price}, has: ${GameState.current.money} `)
    }
    
    public static cpuPrice(basePrice: number, ownedCount: number) {
        return Math.round(basePrice * Math.pow(GameData.cpuPriceExp, ownedCount))
    }

    public static updateCpuStates() {
        let hasChange: boolean = false;
        for (const upgDef of GameData.possibleCpuUpgrades) {
            const userUpg = GameState.current.cpuUpgrades.get(upgDef.id);
            if (!userUpg) {
                // User has not seen upgrade, check if he should now.
                if (GameState.current.money >= upgDef.showDarkAt) {
                    hasChange = true
                    GameState.current.cpuUpgrades.set(upgDef.id,  {
                        darkShown: true,
                    } as knownCpuUpgrade)
                }
            }
        }

        if (hasChange) {
            ForceUpdate.updateBuyCpuButtons()
        }
    }

    public static buyCpu() {
        const price = 1
        Shop.assertCanAfford(price, 'cpu')

        GameState.current.money -= price

        ForceUpdate.updateBuyCpuButtons()
    }
}

export default Shop

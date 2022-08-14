import bl from "./bl"
import GameData from "./GameData"
import GameState from "./GameState"

class Shop {
    static assertCanAfford(price: number, what: string) {
        if (price > GameState.current.money)
            throw new Error(`cannot afford ${what}, price: ${price}, has: ${GameState.current.money} `)
    }
    
    public static cpuPrice() {
        return Math.round(GameData.cpuBasePrice * Math.pow(GameData.cpuPriceExp, GameState.current.cpuCount))
    }

    public static schoolBulliesPrice() {
        return Math.round(GameData.targetBulliesBasePrice * Math.pow(GameData.targetBulliesPriceExp, GameState.current.targetBulliesCount))
    }

    public static buyCpu() {
        const price = Shop.cpuPrice()
        Shop.assertCanAfford(price, 'cpu')

        GameState.current.money -= price
        GameState.current.cpuCount++

        bl.instance.updateCpuUI()
    }

    public static canAffordCpu() {
        const price = Shop.cpuPrice()
        return price <= GameState.current.money
    }
}

export default Shop

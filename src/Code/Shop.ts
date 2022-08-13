import GameState from "./GameState"

class Shop {
    static assertCanAfford(price: number, what: string) {
        if (price > GameState.current.money)
            throw new Error(`cannot afford ${what}, price: ${price}, has: ${GameState.current.money} `)
    }
    
    public static calcCpuPrice(hz: number, ownedCount: number) {
        return hz * (ownedCount + 1)
    }

    public static buyCpu(hz: number) {
        const ownedCount = GameState.current.cpus.get(hz) ?? 0
        const price = Shop.calcCpuPrice(hz, ownedCount)
        Shop.assertCanAfford(price, 'cpu')

        GameState.current.money -= price
        GameState.current.cpus.set(hz, ownedCount + 1)
    }

    public static canAffordCpu(hz: number) {
        const ownedCount = GameState.current.cpus.get(hz) ?? 0
        const price = Shop.calcCpuPrice(hz, ownedCount)
        return price <= GameState.current.money
    }
}

export default Shop

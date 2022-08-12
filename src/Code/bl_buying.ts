import { gameState } from "./bl";

export function calcCpuPrice(hz: number, ownedCount: number) {
    return hz * (ownedCount + 1)
}

export function onBuyCpu(hz: number) {
    const count = gameState.cpus.get(hz) ?? 0
    const price = calcCpuPrice(hz, count)
    assertCanAfford(price, 'cpu')

    gameState.money -= price
    gameState.cpus.set(hz, count + 1)
    onCpuCountChanged()
}

export function updateCanAfford() {

}

function onCpuCountChanged() {

}

function assertCanAfford(price: number, what: string) {
    if (price > gameState.money)
        throw new Error(`cannot afford ${what}, price: ${price}, has: ${gameState.money} `)
}
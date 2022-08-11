import { GameState, MoneyState } from "./GameStateTypes"

const gameStateStorageKey: string = 'hack3rman-gameState'
const moneyStateStorageKey: string = 'hack3rman-moneyState'

export function loadGameState(): GameState {
    const json = localStorage.getItem(gameStateStorageKey)
    if (json)
        return JSON.parse(json) as GameState
        
    const newState = { } as GameState
    return newState
}

export function saveGameState(gameState: GameState) {
    const json = JSON.stringify(gameState)
    localStorage.setItem(gameStateStorageKey, json)
}

export function loadMoneyState(): MoneyState {
    const json = localStorage.getItem(moneyStateStorageKey)
    if (json)
        return JSON.parse(json) as MoneyState
        
    const newState = { } as MoneyState
    newState.amount = 0
    newState.incomePerSec = 0
    return newState
}

export function saveMoneyState(moneyState: MoneyState) {
    const json = JSON.stringify(moneyState)
    localStorage.setItem(moneyStateStorageKey, json)
}

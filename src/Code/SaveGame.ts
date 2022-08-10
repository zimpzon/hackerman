import { GameState } from "./GameStateTypes"

const storageKey: string = 'hack3rman-savegame'

export function loadGameState(): GameState {
    const json = localStorage.getItem(storageKey)
    if (json)
        return JSON.parse(json) as GameState
        
    const newState = { } as GameState
    newState.money = { amount: 666 }
    return newState
}

export function saveGameState(gameState: GameState) {
    const json = JSON.stringify(gameState)
    localStorage.setItem(storageKey, json)
}
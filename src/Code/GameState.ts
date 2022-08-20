import GameData from "./GameData"

type gameStateType = {
    money: number
    income: number
    manualWorkValue: number
    cpuUpgrades: Map<number, knownCpuUpgrade>
}

export type knownCpuUpgrade = {
    id: number
    ownedCount: number
    darkShown: boolean
    fullyShown: boolean
}

class GameState {
    private static storageKey: string = 'save-game'

    public static current: gameStateType = {
        money: 0,
        income: 0,
        manualWorkValue: GameData.manualWorkBasePrice,
        cpuUpgrades: new Map<number, knownCpuUpgrade>(),
    }

    public static load() {
        const json = localStorage.getItem(GameState.storageKey)
        if (!json)
            return

        GameState.current = JSON.parse(json) as gameStateType
    }
    
    public static save() {
        const json = JSON.stringify(GameState.current)
        localStorage.setItem(GameState.storageKey, json)
    }
}

export default GameState

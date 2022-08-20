import GameData from "./GameData"

type gameStateType = {
    money: number
    maxMoney: number
    manualWorkValue: number
    cpuUpgradeCounts: Map<number, number>
    cpuProgress: number
}

class GameState {
    private static storageKey: string = 'save-game'

    public static current: gameStateType = {
        money: 0,
        maxMoney: 0,
        manualWorkValue: GameData.manualWorkBasePrice,
        cpuUpgradeCounts: new Map<number, number>(),
        cpuProgress: 0,
    }

    public static cpuCount: number = 0
    public static totalMhz: number = 0
    public static incomePerSec: number = 0
    
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

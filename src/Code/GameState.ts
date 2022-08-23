import GameData from "./GameData"

type gameStateType = {
    money: number
    maxMoney: number
    manualWorkValue: number
    cpuUpgradeCounts: number[]
    cpuProgress: number
}

class GameState {
    private static storageKey: string = 'save-game'

    public static current: gameStateType = {
        money: 0,
        maxMoney: 0,
        manualWorkValue: GameData.manualWorkBasePrice,
        cpuUpgradeCounts: [],
        cpuProgress: 0,
    }

    public static cpuCount: number = 0
    public static totalMhz: number = 0
    public static incomePerSec: number = 0
    
    public static load() {
        const json = localStorage.getItem(GameState.storageKey)
        if (!json) {
            this.current = {
                money: 0,
                maxMoney: 0,
                manualWorkValue: GameData.manualWorkBasePrice,
                cpuUpgradeCounts: [],
                cpuProgress: 0,
            }
            return
        }

        GameState.current = JSON.parse(json) as gameStateType

        // Set lenght to dynamically adjust to more upgrades implemented.
        GameState.current.cpuUpgradeCounts.length = GameData.possibleCpuUpgrades.length
    }
    
    public static save() {
        const json = JSON.stringify(GameState.current)
        localStorage.setItem(GameState.storageKey, json)
    }

    public static reset() {
        localStorage.removeItem(GameState.storageKey)
        this.load()
    }
}

export default GameState

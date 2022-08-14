import GameData from "./GameData"

type gameStateType = {
    money: number
    income: number
    manualWorkValue: number
    showCpuPane: boolean
    showTargetsPane: boolean
    showRobotsPane: boolean
    cpuCount: number
    targetOneCount: number
    cpuMzh: number
}

class GameState {
    private static storageKey: string = 'hack3rman-gameState'

    public static current: gameStateType = {
        money: 0,
        income: 0,
        manualWorkValue: GameData.manualWorkBasePrice,
        showCpuPane: false,
        showTargetsPane: false,
        showRobotsPane: false,
        cpuCount: 0,
        cpuMzh: GameData.cpuBaseMhz,
        targetOneCount: 1,
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

type gameStateType = {
    money: number
    income: number
    manualWorkValue: number
    cpus: Map<number, number>
}

class GameState {
    private static storageKey: string = 'hack3rman-gameState'

    public static current: gameStateType = {
        money: 0,
        income: 0.2,
        manualWorkValue: 0.1,
        cpus: new Map<number, number>()
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
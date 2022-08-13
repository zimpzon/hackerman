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
        income: 0,
        manualWorkValue: 0.1,
        cpus: new Map<number, number>
    }

    public static load(): GameState {
        const json = localStorage.getItem(GameState.storageKey)
        if (json)
            return JSON.parse(json) as GameState
            
        const newState = { } as GameState
        return newState
    }
    
    public static save(gameState: GameState) {
        const json = JSON.stringify(gameState)
        localStorage.setItem(GameState.storageKey, json)
    }
}

export default GameState
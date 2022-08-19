import FloatingText from "./FloatingText";
import GameState from "./GameState";
import Shop from "./Shop";

class bl {
    public static instance: bl

    public static readonly tickMs: number = 100.0
    public static readonly perSecMul: number = 1.0 / (1000 / bl.tickMs)

    private moneyText: HTMLElement | undefined
    private timer: NodeJS.Timer | undefined
    private tickCount: number = 0
    private floatingText: FloatingText

    public stop() {
        console.log('stopping game...')
        clearInterval(this.timer)
    }

    // Income: random chances at ticks. If multiple success per tick show '+10 X 3'
    constructor() {
        console.log('starting game...')
        this.moneyText = document.getElementById('moneyText') as HTMLElement
        this.floatingText = new FloatingText()
        this.timer = setInterval(() => {this.tick() }, bl.tickMs);

        GameState.load()

        this.tick()
    }

    prevMoney: number = -1;

    private updateMoneyLabels() {
        if (GameState.current.money === this.prevMoney)
            return;

        this.prevMoney = GameState.current.money
        this.moneyText!.innerText = `$${GameState.current.money}`
    }

    private tick() {
        this.tickCount++
        this.floatingText.removeExpired()

        GameState.current.money = GameState.current.money + GameState.current.income * bl.perSecMul
        this.updateMoneyLabels()
        Shop.updateCpuStates()
    }

    public static onManualWorkDone(event: React.MouseEvent) {
        GameState.current.money += GameState.current.manualWorkValue
        bl.instance.updateMoneyLabels()
        bl.instance.floatingText.add(`$${GameState.current.manualWorkValue.toString()}`, event.clientX, event.clientY)
    }
}

export default bl
import FloatingText from "./FloatingText";
import ForceUpdate from "./ForceUpdate";
import GameData from "./GameData";
import GameState from "./GameState";

class bl {
    public static instance: bl

    public static readonly tickMs: number = 100.0
    public static readonly perSecMul: number = 1.0 / (1000 / bl.tickMs)

    private moneyLabel: HTMLElement | undefined
    private incomeLabel: HTMLElement | undefined
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
        this.moneyLabel = document.getElementById('moneyLabel') as HTMLElement
        this.incomeLabel = document.getElementById('incomeLabel') as HTMLElement
        this.floatingText = new FloatingText()
        this.timer = setInterval(() => {this.tick() }, bl.tickMs);

        GameState.load()
    }

    prevMoney: number = -1;

    private updateMoneyLabels() {
        if (GameState.current.money === this.prevMoney)
            return;

        this.prevMoney = GameState.current.money
        this.moneyLabel!.innerText = `$${GameState.current.money}`
    }

    public updateCpuUI() {
        ForceUpdate.updateBuyCpuButtons()
        ForceUpdate.updateCpuList()
    }

    private checkEnableCpus() {
        if (!GameState.current.showCpuPane && GameState.current.money >= GameData.showFirstCpusAt) {
            GameState.current.showCpuPane = true
            ForceUpdate.updateApp()
        }
    }

    private nextUiPriceCheck: number = 0

    private tick() {
        this.tickCount++
        this.floatingText.removeExpired()

        GameState.current.money = GameState.current.money + GameState.current.income * bl.perSecMul
        this.updateMoneyLabels()

        this.checkEnableCpus()
        
        const now = Date.now()
        if (now > this.nextUiPriceCheck && ForceUpdate.updateBuyCpuButtons) {
            ForceUpdate.updateBuyCpuButtons()
            this.nextUiPriceCheck = now + 500
        }
    }

    public static onManualWorkDone(event: React.MouseEvent) {
        GameState.current.money += GameState.current.manualWorkValue
        bl.instance.updateMoneyLabels()
        bl.instance.floatingText.add(`$${GameState.current.manualWorkValue.toString()}`, event.clientX, event.clientY)
    }
}

export default bl
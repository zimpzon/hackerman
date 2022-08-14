import { HtmlHTMLAttributes } from "react";
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
    private moneyDisplayValue: number = 0 

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

    private updateMoneyLabels() {
        const diff = GameState.current.money - this.moneyDisplayValue
        // step is x% of missing value, but clamped at a minimum % of total value
        const change = Math.sign(diff) * Math.max(Math.abs(diff * 0.47), 10)
        this.moneyDisplayValue += change
        if (change > 0 && this.moneyDisplayValue > GameState.current.money)
            this.moneyDisplayValue = GameState.current.money
        
        const displayMoney = Math.round(this.moneyDisplayValue)
        const displayIncome = GameState.current.income.toFixed(2)
        
        this.moneyLabel!.innerText = `$${displayMoney}`
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
        const rndX = Math.random() * 15
        const rndY = Math.random() * 5
        bl.instance.floatingText.add(`$${GameState.current.manualWorkValue.toString()}`, event.clientX + rndX, event.clientY + rndY)
    }
}

export default bl
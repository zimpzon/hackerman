import { HtmlHTMLAttributes } from "react";
import FloatingText from "./FloatingText";
import ForceUpdate from "./ForceUpdate";
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

    constructor() {
        console.log('starting game...')
        this.moneyLabel = document.getElementById('moneyLabel') as HTMLElement
        this.incomeLabel = document.getElementById('incomeLabel') as HTMLElement
        this.floatingText = new FloatingText()
        this.timer = setInterval(() => {this.tick() }, bl.tickMs);

        GameState.load()
    }

    private updateMoneyLabels() {
        const displayMoney = GameState.current.money.toFixed(2)
        const displayIncome = GameState.current.income.toFixed(2)
        
        this.moneyLabel!.innerText = `$${displayMoney}`
        this.incomeLabel!.innerText = `per second: $${displayIncome}`
    }

    public updateCpuUI() {
        ForceUpdate.updateBuyCpuButtons()
        ForceUpdate.updateCpuList()
    }

    private nextUiPriceCheck: number = 0

    private tick() {
        this.tickCount++
        this.floatingText.removeExpired()

        GameState.current.money = GameState.current.money + GameState.current.income * bl.perSecMul
        this.updateMoneyLabels()
    
        const now = Date.now()
        if (now > this.nextUiPriceCheck) {
            ForceUpdate.updateBuyCpuButtons()
            this.nextUiPriceCheck = now + 500
        }
    }

    private calcIncome(): number {
        return 0.0
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
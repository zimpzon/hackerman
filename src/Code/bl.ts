import { useEffect } from "react";
import ForceUpdate from "./ForceUpdate";
import GameState from "./GameState";

class bl {
    public static instance: bl

    public static readonly tickMs: number = 100.0
    public static readonly perSecMul: number = 1.0 / (1000 / bl.tickMs)

    private moneyLabel: HTMLLabelElement | undefined
    private incomeLabel: HTMLLabelElement | undefined
    private timer: NodeJS.Timer | undefined

    public stop() {
        console.log('stopping game...')
        clearInterval(this.timer)
    }

    constructor() {
        console.log('starting game...')
        this.moneyLabel = document.getElementById('moneyLabel') as HTMLLabelElement
        this.incomeLabel = document.getElementById('incomeLabel') as HTMLLabelElement

        this.timer = setInterval(() => {this.tick() }, bl.tickMs);

        GameState.load()
    }

    private updateMoneyLabels() {
        const displayMoney = GameState.current.money.toFixed(2)
        const displayIncome = GameState.current.income.toFixed(2)
        
        this.moneyLabel!.innerText = `$${displayMoney}`
        this.incomeLabel!.innerText = `per second: $${displayIncome}`
    }

    public getCpuOwnedCount(hz: number): number {
        return GameState.current.cpus.get(hz) ?? 0
    }

    public updateCpuUI() {
        ForceUpdate.updateBuyCpuButtons()
        ForceUpdate.updateCpuList()
    }

    private nextUiPriceCheck: number = 0

    private tick() {
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

    public static onManualWorkDone() {
        console.log('work')
        GameState.current.money += GameState.current.manualWorkValue
        bl.instance.updateMoneyLabels()
    }
}

export default bl
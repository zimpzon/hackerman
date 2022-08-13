import { useState } from "react";
import GameState from "./GameState";

class bl {
    public static instance: bl = new bl()

    public static readonly tickMs = 100.0
    public static readonly perSecMul = 1.0 / (1000 / bl.tickMs)

    moneyLabel: HTMLLabelElement | undefined = undefined;
    incomeLabel: HTMLLabelElement | undefined = undefined;

    public init() {
        console.log('starting game...')
        this.moneyLabel = document.getElementById('moneyLabel') as HTMLLabelElement
        this.incomeLabel = document.getElementById('incomeLabel') as HTMLLabelElement

    }

    public stop() {
        console.log('stopping game...')
    }

    constructor() {
        GameState.load()
    }

    private updateMoneyLabels() {
        const displayMoney = GameState.current.money.toFixed(2)
        const displayIncome = GameState.current.income.toFixed(2)
        
        this.moneyLabel!.innerText = `$${displayMoney}`
        this.incomeLabel!.innerText = `per second: $${displayIncome}`
    }

    public getCpuOwnedCount(hz: number): number {
        return GameState.current.cpus.get(1) ?? 0
    }

    private tick() {
        GameState.current.money = GameState.current.money + GameState.current.income * bl.perSecMul
        this.updateMoneyLabels()
    }

    private calcIncome(): number {
        return 0.0
    }

    public onManualWorkDone() {
        GameState.current.money += GameState.current.manualWorkValue
    }
}

export default bl
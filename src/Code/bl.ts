import { useState } from "react";
import App from "../App";

let timerObject: NodeJS.Timer;
let moneyLabel: HTMLLabelElement;
let incomeLabel: HTMLLabelElement;

// progress bars not for hacking targets. Couple to CPU's somehow.

// TODO:
// Buy CPU active = hazMoney (generic mechanism, more will come)
// Show CPU's (QUICK, text labels will do for now)


const tickMs = 100.0
const perSecMul = 1.0 / (1000 / tickMs)

type gameStateType = {
    money: number
    income: number
    manualWorkValue: number
    cpus: Map<number, number>
}

export function updateUiHooks():  {
    const [triggerUpdate, setTriggerUpdate] = useState();
    return number
}
  
export let gameState: gameStateType = {
    money: 0,
    income: 0,
    manualWorkValue: 0.1,
    cpus: new Map<number, number>(),
}

let nextUpdate = Date.now()

const tick = () => {
    console.log(gameState.income * perSecMul)
    gameState.money = gameState.money + gameState.income * perSecMul

    const displayMoney = gameState.money.toFixed(2)
    const displayIncome = gameState.income.toFixed(2)
    
    moneyLabel.innerText = `$${displayMoney}`
    incomeLabel.innerText = `per second: $${displayIncome}`

    if (Date.now() > nextUpdate) {
        App.prototype.settr
    }
}

function calcIncome(): number {
    return 0.0
}

export function onManualWorkDone() {
    gameState.money += gameState.manualWorkValue
}

export const stopGame = () => {
    console.log('stopping game...')
    clearInterval(timerObject)
}

export const startGame = () => {
    console.log('starting game...')
    moneyLabel = document.getElementById('moneyLabel') as HTMLLabelElement
    incomeLabel = document.getElementById('incomeLabel') as HTMLLabelElement

    gameState.income = calcIncome()

    timerObject = setInterval(tick, tickMs);
}

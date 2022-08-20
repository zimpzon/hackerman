import FloatingText from "./FloatingText";
import GameData from "./GameData";
import GameState from "./GameState";

class bl {
    public static instance: bl

    public static readonly tickMs: number = 100.0
    public static readonly perSecMul: number = 1.0 / (1000 / bl.tickMs)

    private moneyText: HTMLElement | undefined
    private tickCount: number = 0
    private floatingText: FloatingText

    constructor() {
        console.log('starting game...')
        this.moneyText = document.getElementById('moneyText') as HTMLElement
        this.floatingText = new FloatingText()

        GameState.load()
         
        this.updateMoneyLabels()
    }

    prevMoney: number = -1;

    private updateMoneyLabels() {
        if (GameState.current.money === this.prevMoney)
            return;

        this.prevMoney = GameState.current.money
        this.moneyText!.innerText = `$${GameState.current.money.toFixed(0)}`
    }

    public updateCounts() {
        GameState.cpuCount = 0
        GameState.totalMhz = 0

        GameState.current.cpuUpgradeCounts.forEach((value: number, key: number) => {
            GameState.cpuCount += value;
            const upg = GameData.possibleCpuUpgrades[key - 1];
            GameState.totalMhz += upg.mhz * value;
        })

        GameState.incomePerSec = GameState.totalMhz * 0.1
    }

    public tick() {
        this.tickCount++
        this.updateCounts();
        this.floatingText.removeExpired()

        GameState.current.money += GameState.incomePerSec *  bl.perSecMul;
        GameState.current.maxMoney = Math.max(GameState.current.maxMoney, GameState.current.money);

        GameState.current.cpuProgress += GameState.totalMhz * 0.01 * bl.perSecMul;
        if (GameState.current.cpuProgress >= 100) {
            GameState.current.cpuProgress = 0
        }

        this.updateMoneyLabels()
    }

    public static onManualWorkDone(event: React.MouseEvent) {
        GameState.current.money += GameState.current.manualWorkValue
        bl.instance.updateMoneyLabels()
        bl.instance.floatingText.add(`$${GameState.current.manualWorkValue.toString()}`, event.clientX, event.clientY)
    }
}

export default bl
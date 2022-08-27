import FloatingText from "./FloatingText";
import { formatMoney } from "./format";
import GameData from "./GameData";
import GameState from "./GameState";

class bl {
    public static instance: bl

    public static readonly tickMs: number = 100.0

    private moneyText: HTMLElement | undefined
    private incomeText: HTMLElement | undefined
    private tickCount: number = 0
    private floatingText: FloatingText

    constructor() {
        console.log('starting game...')
        this.moneyText = document.getElementById('moneyText') as HTMLElement
        this.incomeText = document.getElementById('incomeText') as HTMLElement
        this.floatingText = new FloatingText()

        GameState.load()
    }

    public updateCounts() {
        GameState.cpuCount = 0
        GameState.totalMhz = 0

        for (let i = 0; i < GameState.current.cpuUpgradeCounts.length; ++i) {
            if (!GameState.current.cpuUpgradeCounts[i])
                continue;
                
            const count: number = GameState.current.cpuUpgradeCounts[i]
            GameState.cpuCount += count;
            const upg = GameData.possibleCpuUpgrades[i];
            GameState.totalMhz += upg.mhz * count;
        }

        GameState.incomePerSec = GameState.totalMhz * 0.1
    }

    timeLastUpdate: number = -1;
    nextTitleUpdate: number = 0
    nextAutoSave: number = 30000

    public tick() {
        const now = Date.now()
        const MaxTick = 10000
        const tickMul = this.timeLastUpdate < 0 ? 0 : Math.min(MaxTick, (now - this.timeLastUpdate)) / 1000
        this.timeLastUpdate = now

        this.tickCount++
        this.updateCounts();
        this.floatingText.removeExpired()

        GameState.current.money += Math.round(GameState.incomePerSec *  tickMul * 100) / 100;
        GameState.current.maxMoney = Math.max(GameState.current.maxMoney, GameState.current.money);

        GameState.current.cpuProgress += GameState.totalMhz * 0.01 * tickMul;
        if (GameState.current.cpuProgress >= 100) {
            GameState.current.cpuProgress = 0
        }

        this.moneyText!.innerText = `$${formatMoney(GameState.current.money)}`
        this.incomeText!.innerText = `Per second: ${formatMoney(GameState.incomePerSec, true)}`

        if (now > this.nextTitleUpdate) {
            document.title = `${this.moneyText!.innerText} - hackerman`;
            this.nextTitleUpdate = now + 2000
        }

        if (now > this.nextAutoSave) {
            console.log('Auto saving...');
            GameState.save();
            this.nextAutoSave = now + 30000
        }
    }

    public static onManualWorkDone(event: React.MouseEvent) {
        GameState.current.money += GameState.current.manualWorkValue
        bl.instance.floatingText.add(`$${GameState.current.manualWorkValue.toString()}`, event.clientX, event.clientY)
    }
}

export default bl
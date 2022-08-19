class ForceUpdate {
    public static updateApp() {
        if (this.setAppTick)
            this.setAppTick(Date.now())
    }

    public static updateBuyCpuButtons() {
        if (this.setCpuUpgradesTick)
            this.setCpuUpgradesTick(Date.now())
    }
    public static setAppTick : any
    public static setCpuUpgradesTick : any
}

export default ForceUpdate

class ForceUpdate {
    public static updateApp() {
        if (this.setAppTick)
            this.setAppTick(Date.now())
    }

    public static updateBuyCpuButtons() {
        if (this.setBuyCpuButtonsTick)
            this.setBuyCpuButtonsTick(Date.now())
    }

    public static updateCpuList() {
        if (this.setShowCpuListTick)
            this.setShowCpuListTick(Date.now())
    }

    public static setAppTick : any
    public static setBuyCpuButtonsTick : any
    public static setShowCpuListTick : any
}

export default ForceUpdate

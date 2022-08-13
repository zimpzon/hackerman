import { useState } from "react";

class ForceUpdate {
    public static updateBuyCpuButtons() {
        this.setBuyCpuButtonsTick(Date.now())
    }

    public static updateCpuList() {
        this.setShowCpuListTick(Date.now())
    }

    public static setBuyCpuButtonsTick : any
    public static setShowCpuListTick : any
}

export default ForceUpdate
import { useState } from "react";

export function useUpgradeCpuButtonsTick(): any {
  const [upgradeCpuButtonsTick, setUpgradeCpuButtonsTick] = useState(0)
  return {upgradeCpuButtonsTick, setUpgradeCpuButtonsTick}
}

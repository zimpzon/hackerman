export function formatMhz(mhz: number) {
    return `${mhz} Mhz`;
}
  
export function formatMoney(m: number, decimalsBelow1000: boolean = false): string {
  m = m < 1000 && decimalsBelow1000 ? Math.floor((m) * 10) / 10 : Math.floor(m)

  return m.toLocaleString()
}

export function formatMhz(mhz: number) {
    return `${mhz} Mhz`;
}

const groups: string[] = [
  '', // 0 - 999
  '', // 1000 - 999999
  'million',
  'billion',
  'trillion',
  'quadrillion',
  'quintillion',
  'sextillion',
  'septillion',
  'octillion',
  'nonillion',
  'decillion',
  'undecillion',
  'duodecillion',
  'tredecillion',
  'OVERFLOW',
 ]

export function formatMoney(m: number, zubZeroDecimals: boolean = false): string {
  m = m < 1000 && zubZeroDecimals ? Math.floor((m) * 10) / 10 : Math.floor(m)

  // log 10 / 3 = thousands, millions, billions, etc.
  const log: number = Math.floor(Math.log10(m))
  const group = Math.floor(log / 3)
  if (group >= 2) {
    m = Math.floor(m / Math.pow(1000, group))
  }
  return m.toLocaleString() + ' '+ groups[group]
}

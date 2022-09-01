const groups: string[] = [
  "", // 0 - 999
  "", // 1000 - 999999
  "million",
  "billion",
  "trillion",
  "quadrillion",
  "quintillion",
  "sextillion",
  "septillion",
  "octillion",
  "nonillion",
  "decillion",
  "undecillion",
  "duodecillion",
  "tredecillion",
  "OVERFLOW",
];

export function formatGhz(m: number) {
  if (m <= 0) return m.toString() + " GHz";

  m = m < 1000 ? Math.floor(m * 10) / 10 : Math.floor(m);

  // log 10 / 3 = thousands, millions, billions, etc.
  const log: number = Math.floor(Math.log10(m));
  const group = Math.floor(log / 3);
  if (group >= 2) {
    m = Math.floor(m / Math.pow(1000, group - 1));
  }

  const g = groups[group] ? " " + groups[group] : "";
  return m.toLocaleString() + g + " GHz";
}

export function formatMoney(
  m: number,
  zubZeroDecimals: boolean = false
): string {
  m = m < 1000 && zubZeroDecimals ? Math.floor(m * 10) / 10 : Math.floor(m);

  if (m <= 1) return m.toString();

  // log 10 / 3 = thousands, millions, billions, etc.
  const log: number = Math.floor(Math.log10(m));
  const group = Math.floor(log / 3);
  if (group >= 2) {
    m = Math.floor(m / Math.pow(1000, group - 1));
  }
  return m.toLocaleString() + " " + groups[group];
}

export function formatHz(hz: number) {
    if (hz < 1000) return `${hz} Hz`;
    return 'missing format'
  }
  
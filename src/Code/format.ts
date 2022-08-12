export function formatHz(hz: number) {
    if (hz < 1000) return `${hz / 1000} Hz`;
    return 'missing format'
  }
  
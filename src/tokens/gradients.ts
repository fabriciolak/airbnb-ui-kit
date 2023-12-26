export const gradientsTokens = [
  // Gradients
  { name: 'gradient-radial-01', color: 'radial-gradient(12158.65% 140.68% at 99.42% 0%, #EB4C60 0%, #EB4C60 48.44%, #EB4C60 100%), radial-gradient(12158.65% 140.68% at 99.42% 0%, #C72D65 0%, #D23760 48.44%, #D23755 100%), radial-gradient(12158.65% 140.68% at 99.42% 0%, #C72D65 0%, #D23760 48.44%, #D23755 100%)', type: 'gradient' },
  { name: 'gradient-radial-02', color: 'radial-gradient(1413.54% 103.95% at -3.95% 100%, #D33753 0%, #D13660 52.83%, #C72D65 100%)', type: 'gradient' },
  { name: 'gradient-radial-03', color: 'radial-gradient(12158.65% 140.68% at 99.42% 0%, #C72D65 0%, #D23760 48.44%, #D23755 100%), radial-gradient(12158.65% 140.68% at 99.42% 0%, #C72D65 0%, #D23760 48.44%, #D23755 100%)', type: 'gradient' },
]

export const gradients = Object.fromEntries(Object.values(gradientsTokens).map(({ name, color }) => [name, color]))
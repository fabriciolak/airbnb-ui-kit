export const colorsTokens = [
  // Shades
  { name: 'shade-01', color: 'hsla(0, 0%, 100%, 1)', type: 'shade' },
  { name: 'shade-02', color: 'hsla(0, 0%, 13%, 1)', type: 'shade' },
  { name: 'shade-02/5', color: 'hsla(0, 0%, 13%, 0.05)', type: 'shade' },
  { name: 'shade-02/30', color: 'hsla(0, 0%, 13%, 0.3)', type: 'shade' },
  
  // Neutrals
  { name: 'neutral-01', color: 'hsla(0, 0%, 97%, 1)', type: 'neutral' },
  { name: 'neutral-02', color: 'hsla(0, 0%, 92%, 1)', type: 'neutral' },
  { name: 'neutral-03', color: 'hsla(0, 0%, 87%, 1)', type: 'neutral' },
  { name: 'neutral-04', color: 'hsla(0, 0%, 83%, 1)', type: 'neutral' },
  { name: 'neutral-05', color: 'hsla(0, 0%, 76%, 1)', type: 'neutral' },
  { name: 'neutral-06', color: 'hsla(0, 0%, 69%, 1)', type: 'neutral' },
  { name: 'neutral-07', color: 'hsla(0, 0%, 44%, 1)', type: 'neutral' },
  { name: 'neutral-08', color: 'hsla(0, 0%, 37%, 1)', type: 'neutral' },

  // Primary
  { name: 'primary-01', color: 'hsla(352, 91%, 62%, 1)', type: 'primary' },
  { name: 'primary-02', color: 'hsla(349, 100%, 61%, 1)', type: 'primary' },
  
  // Error
  { name: 'error-01', color: 'hsla(15, 80%, 98%, 1)', type: 'error' },
  { name: 'error-02', color: 'hsla(11, 80%, 42%, 1)', type: 'error' },
  
  // Accents
  { name: 'accent-01', color: 'hsla(345, 63%, 90%, 1)', type: 'accent' },
  { name: 'accent-02', color: 'hsla(344, 62%, 51%, 1)', type: 'accent' },
  { name: 'accent-discount', color: 'hsla(122, 100%, 27%, 1)', type: 'accent' },
  { name: 'accent-link', color: 'hsla(217, 100%, 38%, 1)', type: 'accent' },
]

export const colors = Object.fromEntries(Object.values(colorsTokens).map(({ name, color }) => [name, color]))
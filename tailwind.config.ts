import type { Config } from 'tailwindcss'
import { colors, gradients } from './src/tokens/index'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/*.tsx',
  ],
  theme: {
    colors,
    backgroundImage: {
      ...gradients
    }
  },
  plugins: [],
}
export default config

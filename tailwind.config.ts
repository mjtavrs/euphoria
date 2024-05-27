import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'euphoria-gray-800': '#3C4242',
        'euphoria-gray-700': '#807D7E',
        'euphoria-gray-400': '#BEBCBD',
        'euphoria-gray-200': '#EDEEF2',
        'euphoria-gray-100': '#F6F6F6',
        'euphoria-purple-800': '#8A33FD',
      },
    },
  },
  plugins: [],
}
export default config

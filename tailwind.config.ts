import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'yana-bosque': '#2D5016',
        'yana-agua': '#4CAF50',
        'yana-tierra': '#8B6F47',
        'yana-blanco': '#F5F5F0',
        'yana-gris': '#3D3D3D',
        'yana-naranja': '#E8914D',
        'yana-amarillo': '#F4D35E',
        'yana-rojo': '#C1272D',
        'yana-azul': '#1E5A96',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config

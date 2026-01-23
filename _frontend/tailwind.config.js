/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "gradient-slow": "gradient 12s ease infinite",
      },
      colors: {
        // Paleta Agência Tela Branca - Minimalista e Moderna
        // Branco como cor principal (representando a "tela branca")
        brand: {
          white: '#FFFFFF',
          offwhite: '#FAFAFA',
          lightgray: '#F5F5F5',
          gray: '#E0E0E0',
          darkgray: '#424242',
          charcoal: '#212121',
          black: '#000000',
        },
        // Cores de destaque para CTAs e elementos interativos
        accent: {
          blue: '#2563EB',      // Azul moderno e confiável
          blueHover: '#1D4ED8',
          purple: '#7C3AED',    // Roxo criativo
          purpleHover: '#6D28D9',
          cyan: '#06B6D4',      // Ciano tecnológico
          cyanHover: '#0891B2',
        },
        // Gradientes sugeridos (usar via bg-gradient-to-r)
        // from-accent-blue to-accent-purple
        // from-accent-cyan to-accent-blue
      },
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        neumorphic: '8px 8px 16px #d1d5db, -8px -8px 16px #ffffff',
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
    },
  },
  plugins: [],
}

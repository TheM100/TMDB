/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customGray: '#BBBBBB',
        hoverColorSeriesMovies: '#424F62'
      },
      backdropFilter: { // asegúrate de tener instalado el plugin tailwindcss-filters si es necesario
        'none': 'none',
        'blur-10': 'blur(10px)',
        'blur-20': 'blur(20px)', // Nuevo nivel de blur añadido
        'blur-custom': 'blur(15px)',
      },
      spacing: {
        'heroSize': '550px',  // Añade tu tamaño personalizado aquí
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'glass': 'rgba(255, 255, 255, 0.1)',
      }),
      borderColor: theme => ({
        ...theme('colors'),
        'glass': 'rgba(255, 255, 255, 0.25)',
      })
    }
  },
  variants: {
    extend: {
      backdropFilter: ['responsive'], // Habilita backdrop-filter para tamaños de pantalla responsivos
    }
    
  },
  plugins: [],
};

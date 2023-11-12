/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        spectral: ['Spectral', 'serif'],
        bodonimoda: ['Bodoni Moda', 'serif'],
      },
      colors: {
        //Primary Color
        DBrowColor: '#3F1D1F',
        pinkColor: '#D5B4B4',
        BrowColor: '#867070',
        GutterColor: '#FAF9F7',
        AlabasterColor2: '#FAF9F7',
        WhiteColor: '#FFF',
        //Neutral Color
        IntroColor: '#5BA4FC',
        DangerColor: '#FC3D39',
        WarningColor: '#FC9C30',
        SuccessColor: '#049F67',
        DisableColor: '#F8F8F8',
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'md':'600px',
    },
    fontSize: {
      base: '.75rem',
      f13: '.812rem',
      f14: '.875rem',
      f15: '.937rem',
      f16: '1.0rem',
      f17: '1.062rem',
      f18: '1.125rem',
      f19: '1.187rem',
      f20: '1.25rem',
      f21: '1.312rem',
      f22: '1.375rem',
      f23: '1.437rem',
      f24: '1.50rem',
      f26: '1.625rem',
      f28: '1.750rem',
      f30: '1.875rem',
    },
    extend: {
      fontFamily: {
         'montserrat':'Montserrat',
         'fraunces':'Fraunces'
      },
      colors:{
       dark_cyan:'#3C8067',
       cream:' hsl(30, 38%, 92%)',
       dark_blue:'#1C232B',
       gray_blue:'#6C7289'
      }
    },
  },
}

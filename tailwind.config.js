/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
  ],
  theme: {
    fontFamily: {
      'Montserrat' : ['Montserrat', 'sans'],
      'Fraunces' : ['Fraunces', 'sans'],
    },
    colors : {
      Darkcyan: 'hsl(158, 36%, 37%)',
      Cream: '#F2EAE2',
      Verydarkblue: '#1C232B',
      Darkgrayishblue: 'hsl(228, 12%, 48%)',
      White: '#FFFFFF',
    },
    spacing : {
      90  : '10px',
      100 : '12px',
      120 : '16px',
      150 : '20px',
      200 : '24px',
      250 : '29px',
      270 : '30px',
      300 : '32px',


    },
    borderRadius : {
      8 : '8px',
      10 : '10px',
    },
    fontSize : {
      'slogan' : ['12px', {
        lineHeight : 'auto',
        letterSpacing : '5px',
        fontWeight : '500'
      }],
      'heading' : ['32px', {
        lineHeight : '32px',
        letterSpacing : '0px',
        fontWeight : '700'
      }],
      'parag' : ['14px', {
        lineHeight : '23px',
        letterSpacing : '0px',
        fontWeight : '500'
      }],
      'disc' : ['13px', {
        lineHeight : '23px',
        letterSpacing : '0px',
        fontWeight : '500'
      }],
      'btn' : ['14px', {
        lineHeight : 'auto',
        letterSpacing : '0px',
        fontWeight : '700'
      }],
    },
    
    extend: {
      screens : {
        lg: '1440px',
        card : '600px',
        mobile : '343px',
        sm: '375px',
      },
    },
  },
  plugins: [],
}


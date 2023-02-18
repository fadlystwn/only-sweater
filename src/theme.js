const ONLYSWEATER_THEME = {
  palette: {
    primary: {
      main: '#505B5F',

    },
    text: {
      primary: '#505B5F'
    },
    secondary: {
      main: '#F5B05F',
      textContrast: '#FFF'
    }
  },
  typography: {
    fontFamily: 'Hiragino Muncho',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',

        },
        contained: {
          color: '#FFF',
        },
      },
    },
  }
}

export default ONLYSWEATER_THEME
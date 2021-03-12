import { createMuiTheme } from "@material-ui/core";

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#34DFF7",
      dark: "#4f8dff",
    },
    secondary: {
      main: "#5664d0",
      vibrant: "#615dfa",
    },
  },
  typography: {
    fontFamily: "'Rajdhani', sans-serif",
    h1: {
      fontFamily: "'Montserrat', sans-serif",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
      containedSecondary: {
        fontSize: 20,
        fontWeight: 600,
        padding: "1px 15px",
      },
    },
    MuiBadge: {
      colorPrimary: {
        backgroundColor: "green",
      },
    },
  },
  customColors: {
    bgGrey: "#ebeaf0",
    white: "white",
    black: "black",
    veryLightBg: "rgb(253,253,253)",
    lightBlack: "rgba(0,0,0,0.8)",
    veryLightBlack: "rgba(0,0,0,0.4)"
  },
});

export default Theme;

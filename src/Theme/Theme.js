import { createMuiTheme } from "@material-ui/core";

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#34DFF7",
      dark: "#4f8dff",
      vibrant: "#1abcff",
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
    MuiTab: {
      wrapper: {
        flexDirection: "row !important",
        "& span": {
          marginLeft: 5,
        },
      },
    },
    MuiButton: {
      root: {
        textTransform: "none",
      },
      containedPrimary: {
        boxShadow: "none",
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
      colorSecondary:{
        backgroundColor: "rgba(0,0,0,0.3)",
      }
    },
    MuiOutlinedInput: {
      root: {
        "& fieldset": {
          borderRadius: "15px",
          borderColor: "rgba(0, 0, 0, 0.23) !important",
          "& legend":{
            // visibility:"initial"
          }
        },
        fontWeight: 800,
      },
    },
  },
  customShadows: {
    light: "0px 0px 20px rgba(0,0,0,0.06)",
  },
  customColors: {
    bgGrey: "#ebeaf0",
    white: "white",
    black: "black",
    veryLightBg: "rgb(253,253,253)",
    lightBlack: "rgba(0,0,0,0.8)",
    veryLightBlack: "rgba(0,0,0,0.4)",
  },
});

export default Theme;

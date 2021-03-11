import { createMuiTheme } from "@material-ui/core";

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#34DFF7",
    },
    secondary: {
      main: "#5664d0",
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
  },
});

export default Theme;

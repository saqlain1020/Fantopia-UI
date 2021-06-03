import { createMuiTheme } from "@material-ui/core";

const Theme = createMuiTheme({
  palette: {
    primary: {
      // main: "#34DFF7",
      main: "#0C162F",
      mainWhite: "#0C162F",
      dark: "#060B17",
      vibrant: "#1abcff",
    },
    secondary: {
      main: "#24E3AD",
      vibrant: "#24E3AD",
    },
  },
  typography: {
    // fontFamily: "'Rajdhani', sans-serif",
    fontFamily: "'KoHo', sans-serif",
    h1: {
      fontFamily: "'Montserrat', sans-serif",
    },
  },
  overrides: {
    MuiTab: {
      root: {
        background: "transparent",
      },
      wrapper: {
        flexDirection: "row !important",
        "& span": {
          marginLeft: 5,
        },
      },
    },
    MuiAvatar: {
      root: {
        border: "2px solid #24E3AD",
        boxSizing: "border-box",
        position: "relative",
        "&:after": {
          content: "''",
          border: "3px solid white",
          borderRadius: 360,
          boxSizing: "border-box",
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
        },
      },
    },
    MuiTextField: {
      root: {
        "& input,textarea": {
          color: "white",
        },
        "& .MuiInput-underline:after": {
          borderColor: "white",
        },
        "& .MuiInput-underline:before": {
          borderColor: "rgba(255,255,255,0.5)",
        },
      },
    },
    MuiButton: {
      root: {
        textTransform: "none",
        borderRadius: 360,
      },
      containedPrimary: {
        boxShadow: "none",
      },
      containedSecondary: {
        fontSize: 18,
        fontWeight: 600,
        paddingLeft: 25,
        paddingRight: 25,
      },
      outlinedSecondary: {
        paddingLeft: 25,
        paddingRight: 25,
        fontSize: 18,
      },
    },
    MuiBadge: {
      colorPrimary: {
        backgroundColor: "#24E3AD",
      },
      colorSecondary: {
        backgroundColor: "rgba(0,0,0,0.3)",
      },
    },
    MuiOutlinedInput: {
      root: {
        color: "#24E3AD",
        "& fieldset": {
          // borderRadius: "15px",
          borderRadius: "360px",
          borderColor: "#24E3AD !important",
          "& legend span": {
            // visibility:"initial"
            // color: "#24E3AD !important"
          },
        },
        fontWeight: 800,
      },
      multiline: {
        "& fieldset": {
          borderRadius: "20px",
        },
      },
    },
    MuiTableCell: {
      head: {
        fontSize: 16,
        color: "rgba(0,0,0,0.3)",
        fontWeight: 600,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: "rgba(36,227,173,0.3)",
      },
    },
  },
  customShadows: {
    light: "0px 0px 20px rgba(255,255,255,.06)",
    medium: "0px 0px 30px rgba(255,255,255,0.1)",
  },
  customColors: {
    bgGrey: "#ebeaf0",
    white: "white",
    whiteBtn: "white",
    whiteTable: "white",
    // black: "black",
    black: "#24E3AD",
    veryLightBg: "rgb(253,253,253)",
    lightBlack: "rgba(255,255,255,0.8)",
    veryLightBlack: "rgba(255,255,255,0.4)",
  },
});

export default Theme;

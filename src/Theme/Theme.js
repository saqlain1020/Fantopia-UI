import { colors, createMuiTheme } from "@material-ui/core";

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.purple[500],
    },
    secondary: {
      main: colors.green[500],
    },
  },
  // typography: {
  //   fontFamily: "verdana",
  // },
  // overrides:{
  // }
});

export default Theme;

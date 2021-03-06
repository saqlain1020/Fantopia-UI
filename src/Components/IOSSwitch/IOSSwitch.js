import { Switch, withStyles } from "@material-ui/core";

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 50,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
    overflow: "visible",
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(24px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: theme.palette.secondary.main,
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    marginTop: 1,
    width: 22,
    height: 22,
  },
  track: {
    height: "100%",
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, checked, ...props }) => {
  return (
    <Switch
      checked={checked}
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export default IOSSwitch;

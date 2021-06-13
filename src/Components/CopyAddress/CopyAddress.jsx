import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import CopyIcon from "src/Assets/Icons/copy.png";

const useStyles = makeStyles((theme) => ({
  root: {},
  idValue: {
    whiteSpace: "pre",
    display: "flex",
    alignItems: "center",
    color: theme.customColors.veryLightBlack,
    fontWeight: 600,
    paddingBottom: 10,
    fontSize: 12,
    justifyContent: "center",
  },
}));

const CopyAddress = ({ text, ...props }) => {
  const classes = useStyles();
  const copy = (id) => {
    var configId = document.querySelector(id);
    var range = document.createRange();
    range.selectNode(configId);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      var successful = document.execCommand("copy");
      var msg = successful ? "successful" : "unsuccessful";
      console.log("Copy command was " + msg);
    } catch (err) {
      console.log("Oops, unable to copy");
    }

    selection.removeAllRanges();
  };

  const handleCopy = () => {
    copy("#unique_user_id");
    alert("copied");
  };

  return (
    <div {...props}>
      <Typography className={classes.idValue}>
        <span id="unique_user_id">{text}</span> &nbsp;
        <img
          alt="copy"
          src={CopyIcon}
          style={{ filter: "invert(0.5)" }}
          onClick={handleCopy}
        />
      </Typography>
    </div>
  );
};

export default CopyAddress;

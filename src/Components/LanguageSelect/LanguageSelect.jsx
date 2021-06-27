import React from "react";
import { makeStyles } from "@material-ui/core";
import ReactLanguageSelect from "react-languages-select";
import LanguageIcon from "@material-ui/icons/Language";
//import css module
import "react-languages-select/css/react-languages-select.css";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "fit-content",
    padding: "3px 20px",
    border: `1px solid ${theme.palette.secondary.main}`,
    paddingTop: 12,
    borderRadius: 5,
    float: "right",
  },
  select: {
    color: theme.palette.secondary.main,
    "& button": {
      color: theme.customColors.lightBlack,
      "&::after": {
        borderTopColor: theme.customColors.lightBlack,
      },
    },
    fontWeight: 700,
    "& ul": {
      background: "white",
      "&::-webkit-scrollbar": {
        width: 5,
      },
      "&::-webkit-scrollbar-thumb": {
        background: theme.palette.secondary.main,
      },
      "& li": {
        padding: "5px 30px !important",
        paddingRight: "35px !important",
      },
    },
  },
}));

const LanguageSelect = () => {
  const classes = useStyles();
  const onSelect = (langCode) => {
    console.log(langCode);
  };
  return (
    <div className={classes.root}>
      <LanguageIcon />
      <ReactLanguageSelect
        defaultLanguage="en"
        className={classes.select}
        languages={["en", "fr", "de", "it", "es"]}
        onSelect={onSelect}
      />
    </div>
  );
};

export default LanguageSelect;

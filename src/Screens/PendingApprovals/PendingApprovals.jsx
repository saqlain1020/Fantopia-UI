import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Table from "./Table";
import { useLang } from "src/State/hooks";
import { LOCALE } from "src/Config/localization";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.secondary.main,
    padding: "30px 10px",
  },
  subHeading: {
    color: theme.palette.secondary.dark,
    fontWeight: 600,
    lineHeight: 1,
    marginBottom: 20,
  },
}));

const PendingApprovals = () => {
  const classes = useStyles();
  const lang = useLang();
  return (
    <div className={classes.root}>
      <Typography variant="h4" align="center" className="acmeFont">
        {LOCALE.PENDING_NFT[lang]}
      </Typography>
      <Typography align="center" variant="h5" className={classes.subHeading}>
        Nfts currently pending your approval
      </Typography>
      <Table />
    </div>
  );
};

export default PendingApprovals;

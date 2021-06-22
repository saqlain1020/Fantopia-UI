import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Table from "./Table";

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

  return (
    <div className={classes.root}>
      <Typography variant="h4" align="center" className="acmeFont">
        Pending Approvals
      </Typography>
      <Typography align="center" variant="h5" className={classes.subHeading}>
        Nfts currently pending your approval
      </Typography>
      <Table />
    </div>
  );
};

export default PendingApprovals;

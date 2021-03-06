import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import ChartsTable from "src/Components/ChartsTable/ChartsTable";

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

const Charts = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" align="center" className="acmeFont">
        Fantopia Charts
      </Typography>
      <Typography align="center" variant="h5" className={classes.subHeading}>
        Top selling items
      </Typography>
      <ChartsTable />
    </div>
  );
};

export default Charts;

import React from "react";
import {
  Container,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import data from "./data";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: theme.customShadows.light,
    color: theme.palette.secondary.main,

  },
  bg: {
    background: theme.palette.secondary.vibrant,
    height:100,    
    width:150,
    borderRadius:15,
  },
  soldText: {
    background: theme.palette.secondary.dark,
    width: "max-content",
    color: theme.customColors.white,
    padding: "5px 10px",
    borderRadius: 5,
    marginLeft: "auto",
    marginRight: "auto",
  },
  th:{
    color: theme.palette.secondary.main
  },
  td:{
    color: theme.customColors.white,
  }
}));

const ChartsTable = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <TableContainer className={classes.root}>
        <Table>
          <TableHead>
            <TableRow >
              <TableCell className={classes.th} align="center">Rank</TableCell>
              <TableCell className={classes.th} align="center">Item</TableCell>
              <TableCell className={classes.th} align="center">Name</TableCell>
              <TableCell className={classes.th} align="center"># of Editions</TableCell>
              <TableCell className={classes.th} align="center">Avg Resale</TableCell>
              <TableCell className={classes.th} align="center">Orig. Price</TableCell>
              <TableCell className={classes.th} align="center">Appreciation</TableCell>
              <TableCell className={classes.th} align="center">Gross Sales</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow>
                <TableCell className={classes.td} align="center">{item.rank}</TableCell>
                <TableCell ><div className={classes.bg} /></TableCell>
                <TableCell className={classes.td}>{item.name}</TableCell>
                <TableCell className={classes.td} align="center">
                  <div>{item.editions}</div>
                  {!item.inStock && (
                    <div className={classes.soldText}>Sold out</div>
                  )}
                </TableCell>
                <TableCell className={classes.td} align="center">{item.resale}</TableCell>
                <TableCell className={classes.td} align="center">{item.price}</TableCell>
                <TableCell className={classes.td} align="center">{item.appreciation}</TableCell>
                <TableCell className={classes.td} align="center">{item.sales}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ChartsTable;

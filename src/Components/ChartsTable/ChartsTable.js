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
    color: theme.customColors.lightBlack,
  },
  bg: {
    background: theme.palette.secondary.vibrant,
    height:100,
    width:150
  },
  soldText: {
    background: theme.palette.secondary.vibrant,
    width: "max-content",
    color: "white",
    padding: "5px 10px",
    borderRadius: 5,
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const ChartsTable = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <TableContainer className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Rank</TableCell>
              <TableCell align="center">Item</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center"># of Editions</TableCell>
              <TableCell align="center">Avg Resale</TableCell>
              <TableCell align="center">Orig. Price</TableCell>
              <TableCell align="center">Appreciation</TableCell>
              <TableCell align="center">Gross Sales</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow>
                <TableCell align="center">{item.rank}</TableCell>
                <TableCell className={classes.bg} />
                <TableCell>{item.name}</TableCell>
                <TableCell align="center">
                  <div>{item.editions}</div>
                  {!item.inStock && (
                    <div className={classes.soldText}>Sold out</div>
                  )}
                </TableCell>
                <TableCell align="center">{item.resale}</TableCell>
                <TableCell align="center">{item.price}</TableCell>
                <TableCell align="center">{item.appreciation}</TableCell>
                <TableCell align="center">{item.sales}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ChartsTable;

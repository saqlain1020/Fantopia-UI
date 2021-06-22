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
  TextField,
  Button,
  Select,
  MenuItem,
} from "@material-ui/core";

import data from "./data";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: theme.customShadows.light,
    color: theme.palette.secondary.main,
  },
  bg: {
    background: theme.palette.secondary.vibrant,
    height: 100,
    width: 150,
    borderRadius: 15,
  },
  soldText: {
    background: theme.palette.secondary.dark,
    width: "max-content",
    color: theme.customColors.whiteTable,
    padding: "5px 10px",
    borderRadius: 5,
    marginLeft: "auto",
    marginRight: "auto",
  },
  th: {
    color: theme.palette.secondary.main,
  },
  td: {
    color: theme.customColors.whiteTable,
  },
  link: {
    color: "inherit",
    textDecoration: "none",
  },
  approveBtn: {
    background: "green",
    color: "white",
    marginLeft: 10,
    marginRight: 20,
    "&:hover": {
      background: "green",
    },
  },
  rejectBtn: {
    background: "red",
    color: "white",
    marginLeft: 10,
    marginRight: 20,
    "&:hover": {
      background: "red",
    },
  },
  select:{
      marginLeft: "auto",
      display:"block",
      maxWidth:"fit-content",
      marginBottom:10,
  }
}));

const ChartsTable = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl">
      <Select defaultValue="collection" className={classes.select}>
        <MenuItem value="collection">Collection</MenuItem>
        <MenuItem value="collection1">Collection 1</MenuItem>
        <MenuItem value="collection2">Collection 2</MenuItem>
      </Select>
      <TableContainer className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.th} align="center">
                No.
              </TableCell>
              <TableCell className={classes.th}>Nft</TableCell>
              <TableCell className={classes.th}>Creator</TableCell>
              <TableCell className={classes.th} align="center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow>
                <TableCell className={classes.td} align="center">
                  {item.no}
                </TableCell>
                <TableCell className={classes.td}>
                  <Link to={item.nftLink} className={classes.link}>
                    {item.nftName}
                  </Link>
                </TableCell>

                <TableCell className={classes.td}>
                  <Link to={item.nftLink} className={classes.link}>
                    {item.creatorName}
                  </Link>
                </TableCell>
                <TableCell className={classes.td} align="center">
                  <TextField
                    size="small"
                    variant="outlined"
                    placeholder="Royalty fee"
                  />
                  <Button variant="contained" className={classes.approveBtn}>
                    Approve
                  </Button>
                  <TextField
                    size="small"
                    variant="outlined"
                    placeholder="Reason"
                  />
                  <Button variant="contained" className={classes.rejectBtn}>
                    Reject
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ChartsTable;

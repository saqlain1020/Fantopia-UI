import React, { useState, useEffect } from "react";
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
import {
  useCollectionTokens,
  useUserCollections,
} from "src/Hooks/useCollection";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: theme.customShadows.light,
    color: theme.palette.secondary.main,
    background: theme.palette.primary.contrastText,
  },
  bg: {
    background: theme.palette.secondary.light,
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
  select: {
    marginLeft: "auto",
    display: "block",
    maxWidth: "fit-content",
    marginBottom: 10,
  },
}));

const ChartsTable = () => {
  const classes = useStyles();
  const [selectedCollection, setSelectedCollection] = useState(null);
  const { userCollections } = useUserCollections();
  const { tokens, loading } = useCollectionTokens(selectedCollection, true);

  useEffect(() => {
    if (userCollections.length > 0)
      setSelectedCollection(userCollections[0].address);
  }, [userCollections]);

  return (
    <Container maxWidth="xl">
      <Select
        onChange={(e) => setSelectedCollection(e.target.value)}
        value={selectedCollection}
        className={classes.select}
      >
        {userCollections.map((e) => (
          <MenuItem value={e.address}>{e.name}</MenuItem>
        ))}
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
            {tokens.map((item, index) => (
              <TableRow>
                <TableCell className={classes.td} align="center">
                  {index + 1}
                </TableCell>
                <TableCell className={classes.td}>
                  <Link to={item.nftLink} className={classes.link}>
                    {item.name}
                  </Link>
                </TableCell>

                <TableCell className={classes.td}>
                  <Link to={item.nftLink} className={classes.link}>
                    {item.owner}
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

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
  CircularProgress,
} from "@material-ui/core";

import data from "./data";
import { Link } from "react-router-dom";
import {
  useCollectionTokens,
  useUserCollections,
} from "src/Hooks/useCollection";
import { useLoadingModal } from "src/Hooks/useModal";
import { useSignMintTokenId } from "src/Hooks/useMintToken";
import CustomButton from "src/Components/CustomButton/CustomButton";
import { STATE } from "src/Config/enums";
import { useLang } from "src/State/hooks";
import { LOCALE } from "src/Config/localization";

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
    display: "inline-flex",
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
  const lang = useLang();
  const classes = useStyles();
  const [selectedCollection, setSelectedCollection] = useState(null);
  const { userCollections } = useUserCollections();
  const { tokens, loading } = useCollectionTokens(
    selectedCollection?.address,
    true
  );

  useLoadingModal(loading);

  useEffect(() => {
    if (userCollections.length > 0) setSelectedCollection(userCollections[0]);
  }, [userCollections]);

  return (
    <Container maxWidth="xl">
      <Select
        onChange={(e) => setSelectedCollection(e.target.value)}
        value={selectedCollection}
        className={classes.select}
      >
        {userCollections.map((e) => (
          <MenuItem value={e}>{e.name}</MenuItem>
        ))}
      </Select>
      <TableContainer className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.th} align="center">
                {LOCALE.SERIAL_NO[lang]}
              </TableCell>
              <TableCell className={classes.th}>Nft</TableCell>
              <TableCell className={classes.th}>
                {LOCALE.CREATOR[lang]}
              </TableCell>
              <TableCell className={classes.th} align="center">
                {LOCALE.ACTION[lang]}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tokens.map((item, index) => (
              <Row item={item} index={index} collection={selectedCollection} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

const Row = ({ item, index, collection }) => {
  const lang = useLang();
  const classes = useStyles();
  const { sign, signState } = useSignMintTokenId(collection.address);
  const [royalty, setRoyalty] = useState(collection.royalty);

  useEffect(() => {
    setRoyalty(collection.royalty);
  }, [collection]);

  return (
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
          placeholder={LOCALE.ROYALTY[lang]}
          value={royalty}
          onChange={(e) => setRoyalty(e.target.value)}
        />
        <Button
          className={classes.approveBtn}
          variant="contained"
          onClick={() => sign(item.minter, item.tokenId, item.fees)}
          loading={signState === STATE.BUSY}
        >
          {signState === STATE.BUSY ? <CircularProgress /> : LOCALE.APPROVE[lang]}
        </Button>
        <TextField size="small" variant="outlined" placeholder={LOCALE.REASON[lang]} />
        <Button variant="contained" className={classes.rejectBtn}>
          {signState === STATE.BUSY ? <CircularProgress /> : LOCALE.REJECT[lang]}
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ChartsTable;

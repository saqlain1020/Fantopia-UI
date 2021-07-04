import {
  Button,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import HeartIcon from "src/Assets/Icons/heart.png";
import HexGoldIcon from "src/Assets/Images/hexGold.png";
import HexGiftIcon from "src/Assets/Images/hexgift.png";
import { useEditItemsModal } from "../../Hooks/useModal";
import AuctionTimer from "../AuctionTimer/AuctionTimer";
import { useMetadata } from "src/Hooks/useToken";
import { convertToLowerValue, getHighestBid, getTokenSymbol } from "src/Utils";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: "pointer",
    border: `1px solid ${theme.palette.secondary.main}`,
    paddingTop: 10,
    paddingBottom: 5,
    margin: 7,
    borderRadius: 10,
    overflow: "hidden",
    height: "max-content",
    transition: "all 200ms ease-in-out",
    boxShadow: "0px 0px 0px rgba(255,255,255,0)",
    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow: "0px 10px 25px rgba(255,255,255,0.2)",
    },
  },
  img: {
    // background: theme.palette.secondary.vibrant,
    width: "calc(100% - 16px)",
    objectFit: "fill",
    height: 180,
    marginLeft: 8,
    marginRight: 8,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
}));

const CollectionCard = ({ data }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <div style={{ position: "relative" }}>
        <img
          className={classes.img}
          src={data?.image}
          onClick={() => {
            if (data?.address) history.push(`/collection/${data?.address}`);
          }}
        />
      </div>
      <Divider />
      <Typography className={classes.title}>{data.name}</Typography>
    </div>
  );
};

export default CollectionCard;

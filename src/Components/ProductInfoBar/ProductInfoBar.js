import React, { useEffect, useState } from "react";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import HexPng from "src/Assets/Images/hex.png";
import SmallHexPng from "src/Assets/Images/smallhex.png";
import GoldHexPng from "src/Assets/Images/goldhex.png";
import Discord from "src/Assets/Icons/discordLink.png";
import Facebook from "src/Assets/Icons/Facebook.png";
import Patreon from "src/Assets/Icons/Patreon.png";
import Twitch from "src/Assets/Icons/Twitch.png";
import Twitter from "src/Assets/Icons/Twitter.png";
import Youtube from "src/Assets/Icons/Youtube.png";
import Instagram from "src/Assets/Icons/Instagram.png";
import UserName from "../UserName/UserName";
import {
  convertToLowerValue,
  getAuctionEndTime,
  getHighestBid,
  getTimeLeft,
  getTokenSymbol,
} from "src/Utils";
import CustomButton from "../CustomButton/CustomButton";
import {
  useBuyOrderModal,
  useCancelOrderModal,
  useMakeBidModal,
} from "src/Hooks/useModal";
import { useHistory, useParams } from "react-router-dom";
import PutOnSale from "./../PutOnSale/PutOnSale";
import { useCreateOrder } from "src/Hooks/useOrder";
import { useLang, useUser } from "src/State/hooks";
import { useWeb3 } from "@react-dapp/wallet";
import { STATE } from "src/Config/enums";
import { LOCALE } from "src/Config/localization";
import CATEGORIES from "src/Config/categories";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.dark,
    borderRadius: 15,
    padding: 16,
    boxShadow: theme.customShadows.light,
    // color: theme.palette.secondary.main,
    color: theme.customColors.whiteBtn,
  },
  mainHeading: {
    fontWeight: 700,
  },
  price: {
    textAlign: "center",
    marginTop: 10,
    "& span": {
      // color: theme.palette.primary.main,
    },
  },
  bold: {
    fontWeight: 700,
  },
  para: {
    fontWeight: 500,
    padding: 10,
    "& span": {
      color: theme.palette.secondary.main,
      fontWeight: 700,
      cursor: "pointer",
    },
  },
  btn: {
    color: theme.customColors.whiteBtn,
    fontWeight: 600,
    fontSize: 24,
    borderRadius: 15,
    padding: "5px 0px",
  },
  btn2: {
    color: theme.customColors.white,
    fontWeight: 600,
    fontSize: 24,
    borderRadius: 15,
    padding: "5px 0px",
    background: theme.palette.secondary.vibrant,
  },
  cancelBtn: {
    color: theme.customColors.white,
    fontWeight: 600,
    fontSize: 24,
    borderRadius: 15,
    margin: "20px 0px",
    padding: "5px 0px",
    background: "red",
    "&:hover": {
      background: "red",
    },
  },
  btnOutlined: {
    borderRadius: 10,
    color: theme.palette.secondary.dark,
    borderColor: theme.palette.secondary.dark,
    padding: "5px 0px",
    fontWeight: 700,
    width: 120,
  },
  valuesGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    alignItems: "center",
    justifyItems: "center",
  },
  ownByText: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    textAlign: "center",
  },
  createdByText: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    textAlign: "center",
  },
  goldValue: {
    color: theme.palette.primary.main,
    position: "absolute",
    fontWeight: 700,
    top: 10,
    left: 10,
  },
  shareGrid: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  categories: {
    fontWeight: 700,
    color: theme.customColors.veryLightBlack,
    marginTop: 10,
    marginBottom: 20,
    paddingLeft: 10,
    "& span": {
      color: theme.palette.primary.main,
      paddingLeft: 10,
    },
  },
  idText: {
    fontWeight: 700,
    "& span": {
      color: theme.customColors.veryLightBlack,
    },
  },
  goldWrapper: {
    width: 40,
    height: 40,
    background: "gold",
    borderRadius: 360,
    border: `2px solid ${theme.palette.secondary.main}`,
  },
}));

const ProductInfoBar = ({ metadata, order, fetchOrder }) => {
  const lang = useLang();
  const classes = useStyles();
  const { buynow } = useParams();
  const history = useHistory();
  const { user } = useUser();
  const { account } = useWeb3();
  const { openModal } = useBuyOrderModal();
  const { openModal: openCancelModal } = useCancelOrderModal();
  const { openModal: openBidModal } = useMakeBidModal();
  const [saleState, setSaleState] = React.useState();
  const [auctionEndTime, setAuctionEndTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [buynowTriggered, setBuynowTriggered] = useState(false);
  const { create, createState } = useCreateOrder();

  useEffect(() => {
    if (
      buynow === "buynow" &&
      order &&
      !buynowTriggered &&
      (order?.order.saleKind === 0 || order?.order.maker !== account)
    )
      openModal(order, () => {
        setBuynowTriggered(true);
        fetchOrder();
      });
  }, [order]);

  useEffect(() => {
    if (order) {
      const time = getAuctionEndTime(order.order.expirationTime);
      if (time) setAuctionEndTime(time);
    }
  }, [order]);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (createState === STATE.BUSY) return;

    const order = {
      address: metadata.address,
      tokenId: metadata.tokenId,
      account: account,
      saleKind: saleState.saleKind,
      price: saleState.price,
      paymentToken: saleState.currency === "BNB" ? null : saleState.currency,
      listingTime:
        !saleState.startDate || saleState.startDate === ""
          ? parseInt(Date.now() / 1000)
          : parseInt(saleState.startDate.getTime() / 1000),
      expirationTime:
        !saleState.endDate || saleState.endDate === ""
          ? 0
          : parseInt(saleState.endDate.getTime() / 1000),
      name: metadata.name,
      collectionName: "",
      category: metadata.category,
      verified: user?.verified,
    };

    const success = await create(order);
    if (success) fetchOrder();
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.mainHeading}>
        {metadata?.name}
      </Typography>
      {/* <Typography variant="h6">One Of a Kind</Typography> */}
      {order &&
        (order.order.saleKind === 0 ? (
          <div className={classes.price}>
            <Typography variant="h6" className={classes.bold}>
              {LOCALE.ON_SALE_FOR[lang]}
            </Typography>
            <Typography variant="h3" className={classes.bold}>
              <span>
                {convertToLowerValue(order.order.basePrice)}{" "}
                {getTokenSymbol(order.order.paymentToken)}
              </span>
            </Typography>
          </div>
        ) : (
          <div className={classes.price}>
            <Typography variant="h6" className={classes.bold}>
              {order?.bids.length > 0 ? "Highest Bid" : "Minimum Bid"}
            </Typography>
            <Typography variant="h3" className={classes.bold}>
              <span>
                {getHighestBid(order.bids) ??
                  convertToLowerValue(order.order.basePrice)}{" "}
                {getTokenSymbol(order.order.paymentToken)}
              </span>
            </Typography>
            <Typography variant="h6" className={classes.bold}>
              <span>{}</span>
            </Typography>
          </div>
        ))}
      <Typography className={classes.para}>
        {metadata?.description}
        {/* For use, by you or one client, in a single end product which end users
        are not charged for...<span>React More</span> */}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CustomButton
            fullWidth
            variant="outlined"
            color="secondary"
            className={classes.btn}
            disabled={
              !order ||
              order?.order.saleKind !== 0 ||
              order?.order.maker === account
            }
            onClick={() => openModal(order, fetchOrder)}
          >
            {LOCALE.BUY_NOW[lang]}
          </CustomButton>
        </Grid>
        <Grid item xs={6}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.btn2}
            disabled={
              !order ||
              order?.order.saleKind === 0 ||
              order?.order.maker === account
            }
            onClick={() => openBidModal(order, fetchOrder)}
          >
            {LOCALE.MAKE_OFFER[lang]}
          </Button>
        </Grid>
        {/* <Grid item xs={12} className="flex">
          <Button variant="outlined" className={classes.btnOutlined}>
            Propose Trade
          </Button>
        </Grid> */}
      </Grid>
      <br />
      {metadata?.owner === account && (
        <>
          <form onSubmit={handleCreate}>
            {!order && <PutOnSale getState={setSaleState} />}
            {!order && saleState?.putOnSale && (
              <CustomButton
                fullWidth
                variant="contained"
                color="secondary"
                type="submit"
                className={classes.btn2}
                disabled={!saleState.putOnSale}
                loading={createState === STATE.BUSY}
                style={{ margin: "20px 0px" }}
              >
                {LOCALE.CREATE_ORDER[lang]}
              </CustomButton>
            )}
          </form>
          {order?.order.maker === account && (
            <CustomButton
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.cancelBtn}
              onClick={() => openCancelModal(order)}
            >
              {LOCALE.CANCEL_ORDER[lang]}
            </CustomButton>
          )}
        </>
      )}
      {/* <div className={classes.valuesGrid}>
        <div>
          <Typography align="center">Last Sold For</Typography>
          <Typography align="center" variant="h5">
            <b>1,360</b>
          </Typography>
        </div>
        <div>
          <Button variant="outlined" className={classes.btnOutlined}>
            Price Alert
          </Button>
        </div>
        <div>
          <Typography align="center">Rank</Typography>
          <Typography align="center" variant="h5">
            <b>703</b>
          </Typography>
        </div>
       </div> */}
      <Typography variant="h6" className={classes.ownByText}>
        {LOCALE.OWNER[lang]}
      </Typography>
      <ProfileName
        title={
          metadata?.owner
            ? `${metadata.owner.substring(0, 5)}....${metadata.owner.substring(
                metadata.owner.length - 5,
                metadata.owner.length
              )}`
            : null
        }
      />
      <Typography variant="h6" className={classes.createdByText}>
        {LOCALE.CREATOR[lang]}
      </Typography>
      <ProfileName
        title={
          metadata?.minter
            ? `${metadata.minter.substring(
                0,
                5
              )}....${metadata.minter.substring(
                metadata.minter.length - 5,
                metadata.minter.length
              )}`
            : null
        }
      />
      <div
        className="flex"
        style={{ marginTop: 10, cursor: "pointer" }}
        onClick={() => history.push(`/collection/${metadata?.address}`)}
      >
        <div
          style={{ position: "relative", margin: 10, marginRight: 10 }}
          className={classes.goldWrapper}
        >
          {/* <Typography className={classes.goldValue}>
            {order?.order.asset}
          </Typography> */}
        </div>
        <Typography
          variant="h6"
          className={classes.createdByText}
          style={{ marginRight: 18 }}
        >
          {LOCALE.VIEW_COLLECTION[lang]}
        </Typography>
      </div>
      {/* <div>
        <Typography variant="h6" align="center">
          <b>Share link to this page</b>
        </Typography>
        <div className={classes.shareGrid}>
          <img width="35px" src={Facebook} alt="Facebook" />
          <img width="35px" src={Twitter} alt="Twitter" />
          <img width="35px" src={Instagram} alt="Instagram" />
          <img width="35px" src={Twitch} alt="Twitch" />
          <img width="35px" src={Youtube} alt="Youtube" />
          <img width="35px" src={Patreon} alt="Patreon" />
          <img width="35px" src={Discord} alt="Discord" />
        </div>
      </div> */}
      <Typography className={classes.categories}>
        {LOCALE.CATEGORIES[lang]}:{" "}
        <span>{CATEGORIES[metadata?.category ?? "none"][lang]}</span>
      </Typography>
      <Typography className={classes.idText}>
        <b>{LOCALE.CONTRACT_ADDRESS[lang]}: </b>{" "}
        <span>
          {metadata
            ? `${metadata.address.substring(
                0,
                10
              )}....${metadata.address.substring(
                metadata.address.length - 10,
                metadata.address.length
              )}`
            : null}
        </span>
      </Typography>
      <Typography className={classes.idText}>
        <b>{LOCALE.TOKEN_ID[lang]}: </b> <span>{metadata?.tokenId}</span>
      </Typography>
    </div>
  );
};

export default ProductInfoBar;

const ProfileName = ({ title, subtitle }) => {
  return (
    <div className="flex">
      <div
        style={{ position: "relative", width: 45, height: 50, marginRight: 15 }}
      >
        <UserName noName />
      </div>
      <div>
        <Typography style={{ lineHeight: 1 }}>
          <b>{title}</b>
        </Typography>
        <Typography style={{ lineHeight: 1 }}>{subtitle}</Typography>
      </div>
    </div>
  );
};

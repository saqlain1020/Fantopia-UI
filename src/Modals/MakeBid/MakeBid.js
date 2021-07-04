import React, { useEffect, useState } from "react";
import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import Step from "../Step";
import { useMintERC721, useSignMintTokenId } from "../../Hooks/useMintToken";
import { useERC20Approval, useERC721Approval } from "../../Hooks/useApproval";
import { useCloseModal } from "../../Hooks/useModal";
import { STATE } from "src/Config/enums";
import { useSignBuyOrder } from "src/Hooks/useOrder";
import {
  convertToHigherValue,
  convertToLowerValue,
  getHighestBid,
} from "src/Utils";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.customColors.lightBlack,
    maxWidth: 350,
  },
}));

const MakeOffer = ({ payload }) => {
  const classes = useStyles();
  const { approveState, isApproved, approvedBalance, approve } =
    useERC20Approval(payload.order.paymentToken, payload.order.basePrice);
  const { sign, signState } = useSignBuyOrder();
  const closeModal = useCloseModal();
  const [price, setPrice] = useState(0);
  const [priceErr, setPriceErr] = useState(null);

  useEffect(() => {
    const bid =
      payload.bids.length === 0
        ? convertToLowerValue(payload.order.basePrice) + 1
        : getHighestBid(payload.bids) + 1;
    setPrice(bid);
    validatePrice(bid);
  }, []);

  useEffect(() => {
    // it won't trigger if payment token is already approved, cause approve state will be IDLE then
    if (approveState === STATE.SUCCEED && isApproved) signOrder();
  }, [approveState]);

  useEffect(() => {
    if (signState == STATE.SUCCEED) closeModal();
  }, [signState]);

  const signOrder = () => {
    validatePrice(price);
    if (convertToHigherValue(price, true).gt(payload.order.basePrice))
      sign(payload, price.toString());
  };

  const validatePrice = (p) => {
    if (convertToHigherValue(p, true).gt(payload.order.basePrice))
      setPriceErr(null);
    else setPriceErr("Invalid Price");
  };
  return (
    <form
      onClick={(e) => {
        // e.preventDefault()(isApproved ? sign(payload, price) : approve());
      }}
      className={classes.root}
    >
      <Typography variant="h4" style={{ marginBottom: 20 }}>
        <b>Make Offer</b>
      </Typography>
      <Typography>
        <b>Bid Price</b>
        <small>(required)</small>
      </Typography>
      <TextField
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
          validatePrice(e.target.value);
        }}
        size="small"
        // variant="outlined"
        placeholder="Enter Price"
        required
        fullWidth
        error={priceErr}
        helperText={priceErr ? "Price should be higher." : null}
      />
      <Step
        heading="Approve"
        para="Approve Exchange Contract"
        onClick={() => approve()}
        disabled={isApproved}
        state={isApproved ? STATE.SUCCEED : approveState}
      />
      <br />
      <Step
        heading="Sign Order"
        para="Sign Bid Order"
        onClick={() => signOrder()}
        disabled={priceErr !== null}
        state={signState}
      />
      <br />
      <Button
        color="secondary"
        variant="outlined"
        fullWidth
        disabled={approveState === STATE.BUSY}
        onClick={() => closeModal()}
      >
        Close
      </Button>
    </form>
  );
};

export default MakeOffer;

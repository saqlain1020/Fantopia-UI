import React, { useEffect } from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import Step from "../Step";
import { useCloseModal } from "../../Hooks/useModal";
import { STATE } from "src/Config/enums";
import { useBuyOrder, useSignBuyOrder } from "src/Hooks/useOrder";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.customColors.lightBlack,
    maxWidth: 350,
  },
}));

const BuyOrder = ({ payload }) => {
  const classes = useStyles();
  const { sign, signState, order } = useSignBuyOrder();
  const { buy, buyState } = useBuyOrder();
  const closeModal = useCloseModal();

  useEffect(() => {
    sign(payload);
  }, []);

  useEffect(() => {
    if (signState === STATE.SUCCEED && order) buy(order);
  }, [signState, order]);

  useEffect(() => {
    if (buyState === STATE.SUCCESS) closeModal();
  }, [buyState]);

  return (
    <div className={classes.root}>
      <Typography variant="h4" style={{ marginBottom: 20 }}>
        <b>Follow Steps</b>
      </Typography>

      <Step
        heading="Sign Order"
        para="Sign buy order"
        onClick={() => sign(payload)}
        state={signState}
      />
      <br />

      <Step
        heading="Send Transaction"
        para="Send Transaction to buy order"
        onClick={() => buy(order)}
        state={buyState}
      />

      <br />
      <Button
        color="secondary"
        variant="outlined"
        fullWidth
        disabled={buyState === STATE.BUSY && signState === STATE.BUSY}
        onClick={() => closeModal()}
      >
        Close
      </Button>
    </div>
  );
};

export default BuyOrder;

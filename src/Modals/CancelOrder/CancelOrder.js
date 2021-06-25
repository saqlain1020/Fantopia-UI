import React, { useEffect } from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import Step from "../Step";
import { useCloseModal } from "../../Hooks/useModal";
import { STATE } from "src/Config/enums";
import { useCancelOrder } from "src/Hooks/useOrder";
import { useWaleltSign } from "src/Hooks/useWalletSign";
import { splitSignature } from "ethers/lib/utils";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.customColors.lightBlack,
    maxWidth: 350,
  },
}));

const CancelOrder = ({ payload }) => {
  const classes = useStyles();

  const { sign, signState, signature } = useWaleltSign();
  const { cancel, cancelState } = useCancelOrder();
  const closeModal = useCloseModal();

  useEffect(() => {
    sign(payload.orderHash);
  }, []);

  useEffect(() => {
    if (signState === STATE.SUCCEED) cancel(payload, splitSignature(signature));
  }, [signState]);

  useEffect(() => {
    if (cancelState === STATE.SUCCEED) closeModal();
  }, [cancelState]);

  return (
    <div className={classes.root}>
      <Typography variant="h4" style={{ marginBottom: 20 }}>
        <b>Follow Steps</b>
      </Typography>

      <Step
        heading="Sign Order"
        para="Sign order to cancel"
        onClick={() => sign(payload.orderHash)}
        state={signState}
      />
      <br />

      <Step
        heading="Cancel"
        para="Cancel Order"
        onClick={() => cancel(payload, splitSignature(signature))}
        state={cancelState}
      />

      <br />
      <Button
        color="secondary"
        variant="outlined"
        fullWidth
        disabled={cancelState === STATE.BUSY || signState === STATE.BUSY}
        onClick={() => closeModal()}
      >
        Close
      </Button>
    </div>
  );
};

export default CancelOrder;

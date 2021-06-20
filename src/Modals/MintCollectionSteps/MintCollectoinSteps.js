import React, { useEffect } from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import Step from "../Step";
import { useMintERC721, useSignMintTokenId } from "../../Hooks/useMintToken";
import { useERC721Approval } from "../../Hooks/useApproval";
import { useCloseModal } from "../../Hooks/useModal";
import { STATE } from "src/Config/enums";
import { useCreateOrder } from "src/Hooks/useOrder";
import { NATIVE_ERC721_ADDRESS } from "src/Config/contracts";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.customColors.lightBlack,
    maxWidth: 350,
  },
}));

const CollectionSteps = ({ payload }) => {
  const { metadata, order } = payload;
  const classes = useStyles();
  const { approveState, isApproved, approve } = useERC721Approval(
    metadata.address
  );
  const { sign, signState, signature, tokenId } = useSignMintTokenId(
    metadata.address,
    metadata.shouldSignMint
  );
  const { mint, mintState } = useMintERC721(metadata);
  const { create, createState } = useCreateOrder();
  const closeModal = useCloseModal();

  console.log(payload);

  useEffect(() => {
    if (!isApproved && approveState === STATE.SUCCEED) approve();
    else if (
      isApproved &&
      approveState === STATE.SUCCEED &&
      signState != STATE.SUCCEED
    )
      sign(metadata.fees);
  }, [isApproved, approveState]);

  useEffect(() => {
    if (signState === STATE.SUCCEED && mintState === STATE.IDLE)
      mint(tokenId, signature);
  }, [signState]);

  useEffect(() => {
    if (mintState === STATE.SUCCEED && order) create({ ...order, tokenId });
    else if (mintState === STATE.SUCCEED) closeModal(tokenId);
  }, [mintState]);

  useEffect(() => {
    if (createState === STATE.SUCCEED) closeModal(tokenId);
  }, [createState]);

  return (
    <div className={classes.root}>
      <Typography variant="h4" style={{ marginBottom: 20 }}>
        <b>Follow Steps</b>
      </Typography>

      <Step
        heading="Approve"
        para="Approve Exchange Contract"
        onClick={() => approve()}
        state={approveState}
      />
      <br />
      {metadata.shouldSignMint && (
        <>
          <Step
            heading="Sign Message"
            para="Sign TokenId and Fees to Mint token"
            onClick={() => sign(metadata.fees)}
            state={signState}
          />
          <br />
        </>
      )}
      <Step
        heading="Mint"
        para="Minting Token"
        onClick={() => mint(tokenId, signature)}
        state={mintState}
      />
      {order && (
        <Step
          heading="Sign Order"
          para="Sign Sell Order"
          onClick={() => create(order)}
          state={createState}
        />
      )}

      <br />
      <Button
        color="secondary"
        variant="outlined"
        fullWidth
        disabled={
          approveState === STATE.BUSY ||
          mintState === STATE.BUSY ||
          signState === STATE.BUSY ||
          (order && createState === STATE.BUSY)
        }
        onClick={() => closeModal()}
      >
        Close
      </Button>
    </div>
  );
};

export default CollectionSteps;

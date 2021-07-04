import React, { useEffect, useState } from "react";
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

  const { mint, mintState, tokenId } = useMintERC721(metadata);
  const { create, createState } = useCreateOrder();
  const closeModal = useCloseModal();

  useEffect(() => {
    if (!isApproved && approveState === STATE.SUCCEED) approve();
    else if (isApproved && approveState === STATE.SUCCEED) mint();
  }, [isApproved, approveState]);

  useEffect(() => {
    if (mintState === STATE.SUCCEED && order && tokenId)
      create({ ...order, tokenId });
    else if (mintState === STATE.SUCCEED && tokenId) closeModal(tokenId);
  }, [mintState, tokenId]);

  useEffect(() => {
    if (createState === STATE.SUCCEED && tokenId) closeModal(tokenId);
  }, [createState, tokenId]);

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

      <Step
        heading="Mint"
        para="Minting Token"
        onClick={() => mint()}
        state={mintState}
      />
      {order && (
        <Step
          heading="Sign Order"
          para="Sign Sell Order"
          onClick={() => create({ ...order, tokenId })}
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

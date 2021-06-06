import React, { useEffect } from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import Step from "../Step";
import { useMintERC721, useSignMintTokenId } from "../../Hooks/useMintToken";
import { useERC721Approval } from "../../Hooks/useApproval";
import { useCloseModal } from "../../Hooks/useModal";
import { STATE } from "src/Config/enums";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.customColors.lightBlack,
    maxWidth: 350,
  },
}));

const CollectionSteps = ({ payload }) => {
  const classes = useStyles();
  const { approveState, isApproved, approve } = useERC721Approval(
    payload.address
  );
  const { sign, signState, signature, tokenId } = useSignMintTokenId(
    payload.address
  );
  const { mintState, mint } = useMintERC721(payload);
  const closeModal = useCloseModal();

  useEffect(() => {
    console.log(isApproved, approveState);
    if (!isApproved && approveState === STATE.SUCCEED) approve();
    else if (isApproved && approveState === STATE.SUCCEED) sign(payload.fees);
  }, [isApproved, approveState]);

  useEffect(() => {
    if (signState === STATE.SUCCEED && mintState === STATE.IDLE)
      mint(tokenId, signature);
  }, [signState]);

  useEffect(() => {
    if (mintState === STATE.SUCCEED) closeModal();
  }, [mintState]);

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
        heading="Sign Message"
        para="Sign TokenId and Fees to Mint token"
        onClick={() => sign(payload.fees)}
        state={signState}
      />
      <br />

      <Step
        heading="Mint"
        para="Minting Token"
        onClick={() => mint(tokenId, signature)}
        state={mintState}
      />

      <br />
      <Button
        color="secondary"
        variant="outlined"
        fullWidth
        disabled={
          approveState === STATE.BUSY ||
          mintState === STATE.BUSY ||
          signState === STATE.BUSY
        }
        onClick={() => closeModal()}
      >
        Close
      </Button>
    </div>
  );
};

export default CollectionSteps;

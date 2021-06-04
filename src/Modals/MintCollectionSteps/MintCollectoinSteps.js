import React, { useEffect } from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import Step from "../Step";
import { useMintERC721 } from "../../Hooks/useMintToken";
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
  const data = paylaod;
  const classes = useStyles();
  const { mintState, mint } = useMintERC721(data);
  const { approveState, isApproved, approve } = useERC721Approval(address);
  const closeModal = useCloseModal();

  useEffect(() => {
    mint(payload);
  }, []);

  useEffect(() => {
    if (isApproved && mintState === STATE.IDLE) mint();
  }, [isApproved]);

  useEffect(() => {
    if (mintState === STATE.SUCCEED) closeModal();
  }, [mintState]);

  return (
    <div className={classes.root}>
      <Typography variant="h4" style={{ marginBottom: 20 }}>
        <b>Follow Steps</b>
      </Typography>

      <Step
        heading="Deploy contract"
        para="Deploy code for the new collection smart contract"
        onClick={() => approve()}
        state={approveState}
      />
      <br />

      <Step
        heading="Upload Data"
        para="Uploading Data"
        onClick={() => mint()}
        state={mintState}
      />

      <br />
      <Button
        color="secondary"
        variant="outlined"
        fullWidth
        disabled={approveState === STATE.BUSY || mintState !== STATE.BUSY}
        onClick={() => closeModal()}
      >
        Close
      </Button>
    </div>
  );
};

export default CollectionSteps;

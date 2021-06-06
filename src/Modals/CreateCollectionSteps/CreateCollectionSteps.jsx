import React, { useEffect } from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import Step from "../Step";
import { useCreateERC721 } from "../../Hooks/useCreate";
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
  const { createState, create } = useCreateERC721();
  const closeModal = useCloseModal();

  useEffect(() => {
    console.log(payload);
    create(payload);
  }, []);

  useEffect(() => {
    if (createState === STATE.SUCCESS) closeModal();
  }, [createState]);

  return (
    <div className={classes.root}>
      <Typography variant="h4" style={{ marginBottom: 20 }}>
        <b>Follow Steps</b>
      </Typography>

      <Step
        heading="Deploy contract"
        para="Deploy code for the new collection smart contract"
        onClick={() => create(payload)}
        state={createState}
      />

      <br />
      <Button
        color="secondary"
        variant="outlined"
        fullWidth
        disabled={createState !== STATE.SUCCESS && createState !== STATE.FAILED}
        onClick={() => closeModal()}
      >
        Close
      </Button>
    </div>
  );
};

export default CollectionSteps;
